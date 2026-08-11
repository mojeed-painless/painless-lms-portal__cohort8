import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const API_BASE = import.meta.env.VITE_API_BASE_URL || API_BASE_URL || 'http://localhost:5000';
const API_URL = `${API_BASE}/api/users/admin`;

const CohortScreen = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cohorts, setCohorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || user.role !== 'admin') return;

    const loadCohorts = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/cohorts`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        if (Array.isArray(data) && data.length) {
          setCohorts(data);
        } else {
          setCohorts([
            'cohort-1',
            'cohort-2',
            'cohort-3',
            'cohort-4',
            'cohort-5',
            'cohort-6',
            'cohort-7',
            'cohort-8',
          ]);
        }
      } catch (err) {
        console.error('Failed to load cohorts:', err);
        setError('Unable to load cohorts. Please try again later.');
        setCohorts([
          'cohort-1',
          'cohort-2',
          'cohort-3',
          'cohort-4',
          'cohort-5',
          'cohort-6',
          'cohort-7',
          'cohort-8',
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadCohorts();
  }, [user, navigate]);

  const handleSelect = (cohort) => {
    localStorage.setItem('selectedCohort', cohort);
    navigate('/admin');
  };

  const storedCohort = typeof window !== 'undefined' ? localStorage.getItem('selectedCohort') : null;

  if (storedCohort) {
    return <Navigate to="/admin" replace />;
  }

  if (!user || user.role !== 'admin') {
    return (
      <section className="cohort-screen">
        <div className="cohort-screen__header">
          <h1>Access denied</h1>
          <p>You must be an administrator to choose a cohort.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cohort-screen">
      <div className="cohort-screen__header">
        <h1>Select a Cohort</h1>
        <p>Choose a cohort to view and manage the students belonging to that group.</p>
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading-message">Loading cohorts...</div>}

      <div className="cohort-grid">
        {cohorts.map((cohort, index) => (
          <button
            key={`${String(cohort)}-${index}`}
            type="button"
            className="cohort-card"
            onClick={() => handleSelect(cohort)}
          >
            <span>{String(cohort).replace(/cohort-?/i, 'Cohort ')}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CohortScreen;
