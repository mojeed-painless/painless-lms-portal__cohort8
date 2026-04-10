import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { API_BASE_URL } from '../../config/api';
import { isPathUnlocked } from '../../utils/htmlCourseUnlockConfig';

/**
 * Route guard for course content access.
 * - HTML/CSS content: Requires htmlAccess and release schedule
 * - JavaScript content: Requires jsAccess and release schedule
 * - React content: Requires reactAccess and release schedule
 * - Admins bypass course access flags but still respect release schedule
 */
const CourseAccessRoute = ({ courseType }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [releaseDay, setReleaseDay] = useState(0);
  const [isReleaseLoading, setIsReleaseLoading] = useState(true);

  const getAccessField = (type) => {
    if (type === 'html') return 'htmlAccess';
    if (type === 'js') return 'jsAccess';
    if (type === 'react') return 'reactAccess';
    return 'htmlAccess';
  };

  const accessField = getAccessField(courseType);

  // Fetch release day from server for gated course content
  useEffect(() => {
    const fetchReleaseDay = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/config/html-release-day`);
        if (!response.ok) throw new Error('Failed to fetch release day');
        const data = await response.json();
        setReleaseDay(Number(data.value) || 0);
      } catch (error) {
        console.error('Error fetching release day:', error);
        setReleaseDay(0);
      } finally {
        setIsReleaseLoading(false);
      }
    };

    fetchReleaseDay();
  }, []);

  // Show loading while auth or release day is loading
  if (isLoading || isReleaseLoading) {
    return (
      <div className="loading-overlay">
        <div className="spinner">
          <div className="ring ring1" />
          <div className="ring ring2" />
          <div className="ring ring3" />
        </div>
      </div>
    );
  }

  const isAdmin = user?.role === 'admin';
  const hasCourseAccess = Boolean(user?.[accessField]);

  if (!isAdmin && !hasCourseAccess) {
    return <Navigate to="/no-access" state={{ from: location, reason: 'course_locked' }} replace />;
  }

  if (!isPathUnlocked(location.pathname, releaseDay)) {
    return <Navigate to="/no-access" state={{ from: location, reason: 'content_locked' }} replace />;
  }

  return <Outlet />;
};

export default CourseAccessRoute;
