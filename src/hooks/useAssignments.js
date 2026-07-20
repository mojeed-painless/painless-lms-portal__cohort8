import { useState, useCallback } from 'react';

export const useAssignments = (token) => {
  const [pending, setPending] = useState([]);
  const [submitted, setSubmitted] = useState([]);
  const [graded, setGraded] = useState([]);
  const [allAssignments, setAllAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  // Helper function to convert courseType to courseId
  const getCourseId = (courseType) => {
    const courseMap = {
      'html': 'html',
      'css': 'css',
      'js': 'js',
      'javascript': 'js',
      'react': 'react',
    };
    return courseMap[courseType] || courseType;
  };

  const handleError = (err) => {
    const message = err.response?.data?.message || err.message;
    setError(message);
    console.error('Assignment Error:', message);
  };

  // STUDENT ENDPOINTS
  const fetchPendingAssignments = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/assignments/student/pending`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const studentPendingAssignments = data.assignments || [];

      if (studentPendingAssignments.length > 0) {
        setPending(studentPendingAssignments);
        return;
      }

      const [submittedResponse, gradedResponse] = await Promise.all([
        fetch(`${API_URL}/api/assignments/student/submitted`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_URL}/api/assignments/student/graded`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const submittedData = submittedResponse.ok
        ? await submittedResponse.json()
        : { assignments: [] };
      const gradedData = gradedResponse.ok
        ? await gradedResponse.json()
        : { assignments: [] };

      const completedAssignmentIds = new Set(
        [
          ...(submittedData.assignments || []).map((item) => item.id || item._id),
          ...(gradedData.assignments || []).map((item) => item.id || item._id),
        ].filter(Boolean)
      );

      const fallbackResponse = await fetch(`${API_URL}/api/assignments/admin/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!fallbackResponse.ok) {
        setPending([]);
        return;
      }

      const fallbackData = await fallbackResponse.json();
      const allAssignmentsForStudent = (fallbackData.assignments || []).filter(
        (assignment) => !completedAssignmentIds.has(assignment.id || assignment._id)
      );

      setPending(allAssignmentsForStudent);
    } catch (err) {
      handleError(err);
      setPending([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL, token]);

  const fetchSubmittedAssignments = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/assignments/student/submitted`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubmitted(data.assignments || []);
    } catch (err) {
      handleError(err);
      setSubmitted([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL, token]);

  const fetchGradedAssignments = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/assignments/student/graded`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGraded(data.assignments || []);
    } catch (err) {
      handleError(err);
      setGraded([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL, token]);

  const submitAssignment = useCallback(
    async (studentAssignmentId, submissionLink) => {
      if (!submissionLink.trim()) {
        setError('Submission link cannot be empty');
        return false;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_URL}/api/assignments/${studentAssignmentId}/submit`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ submissionLink }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to submit assignment');
        }

        // Remove from pending and refresh submitted
        setPending((prev) => prev.filter((a) => a.id !== studentAssignmentId));
        await fetchSubmittedAssignments();
        return true;
      } catch (err) {
        handleError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [API_URL, token, fetchSubmittedAssignments]
  );

  // ADMIN ENDPOINTS
  const fetchSubmittedAssignmentsAdmin = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/assignments/admin/submitted`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubmitted(data.assignments || []);
    } catch (err) {
      handleError(err);
      setSubmitted([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL, token]);

  const fetchGradedAssignmentsAdmin = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/assignments/admin/graded`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGraded(data.assignments || []);
    } catch (err) {
      handleError(err);
      setGraded([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL, token]);

  const gradeAssignment = useCallback(
    async (studentAssignmentId, score, feedback = '') => {
      if (score === '' || score === null || isNaN(score)) {
        setError('Score must be a valid number');
        return false;
      }

      if (score < 0 || score > 100) {
        setError('Score must be between 0 and 100');
        return false;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_URL}/api/assignments/${studentAssignmentId}/grade`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ score: parseInt(score), feedback }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to grade assignment');
        }

        // Remove from submitted and refresh graded
        setSubmitted((prev) => prev.filter((a) => a.id !== studentAssignmentId));
        await fetchGradedAssignmentsAdmin();
        return true;
      } catch (err) {
        handleError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [API_URL, token, fetchGradedAssignmentsAdmin]
  );

  const updateGrade = useCallback(
    async (studentAssignmentId, score, feedback = '') => {
      if (score === '' || score === null || isNaN(score)) {
        setError('Score must be a valid number');
        return false;
      }

      if (score < 0 || score > 100) {
        setError('Score must be between 0 and 100');
        return false;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_URL}/api/assignments/${studentAssignmentId}/update-grade`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ score: parseInt(score), feedback }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to update grade');
        }

        // Refresh graded assignments
        await fetchGradedAssignmentsAdmin();
        return true;
      } catch (err) {
        handleError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [API_URL, token, fetchGradedAssignmentsAdmin]
  );

  // ADMIN ASSIGNMENT MANAGEMENT
  const fetchAllAssignments = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/assignments/admin/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllAssignments(data.assignments || []);
    } catch (err) {
      handleError(err);
      setAllAssignments([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL, token]);

  const createAssignment = useCallback(
    async (title, description, dueDate, courseType) => {
      if (!title.trim()) {
        setError('Assignment title cannot be empty');
        return false;
      }

      if (!dueDate) {
        setError('Due date is required');
        return false;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/api/assignments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            description,
            dueDate,
            courseId: getCourseId(courseType),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to create assignment');
        }

        // Refresh all assignments
        await fetchAllAssignments();
        return true;
      } catch (err) {
        handleError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [API_URL, token, fetchAllAssignments]
  );

  const updateAssignment = useCallback(
    async (assignmentId, title, description, dueDate, courseType) => {
      if (!title.trim()) {
        setError('Assignment title cannot be empty');
        return false;
      }

      if (!dueDate) {
        setError('Due date is required');
        return false;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/api/assignments/${assignmentId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            description,
            dueDate,
            courseId: getCourseId(courseType),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to update assignment');
        }

        // Refresh all assignments
        await fetchAllAssignments();
        return true;
      } catch (err) {
        handleError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [API_URL, token, fetchAllAssignments]
  );

  const deleteAssignment = useCallback(
    async (assignmentId) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/api/assignments/${assignmentId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete assignment');
        }

        // Remove from local state
        setAllAssignments((prev) => prev.filter((a) => a.id !== assignmentId));
        return true;
      } catch (err) {
        handleError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [API_URL, token]
  );

  return {
    // Data
    pending,
    submitted,
    graded,
    allAssignments,
    loading,
    error,
    // Student methods
    fetchPendingAssignments,
    fetchSubmittedAssignments,
    fetchGradedAssignments,
    submitAssignment,
    // Admin methods
    fetchSubmittedAssignmentsAdmin,
    fetchGradedAssignmentsAdmin,
    gradeAssignment,
    updateGrade,
    // Admin assignment management
    fetchAllAssignments,
    createAssignment,
    updateAssignment,
    deleteAssignment,
  };
};
