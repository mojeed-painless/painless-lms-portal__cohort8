import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UnderDevelopment from '../components/common/UnderDevelopment';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../config/api';
import { getTotalUnlockedRoutes, getFirstRouteForDay, getDayLabel } from '../utils/htmlCourseUnlockConfig';
import '../assets/styles/settings.css';
import { FileText } from 'lucide-react';

export default function SettingsScreen() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const navigate = useNavigate();
  const [currentReleaseDay, setCurrentReleaseDay] = useState(0);
  const [dailyQuizStartDate, setDailyQuizStartDate] = useState('2026-07-14');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdatingQuizDate, setIsUpdatingQuizDate] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Fetch current release day from server
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const selectedCohort = typeof window !== 'undefined' ? localStorage.getItem('selectedCohort') : null;
        const cohortQuery = selectedCohort ? `?cohort=${encodeURIComponent(selectedCohort)}` : '';
        const [releaseResponse, quizDateResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/config/html-release-day${cohortQuery}`),
          fetch(`${API_BASE_URL}/api/config/daily-quiz-start-date${cohortQuery}`),
        ]);

        if (!releaseResponse.ok) throw new Error('Failed to fetch release day');
        if (!quizDateResponse.ok) throw new Error('Failed to fetch daily quiz start date');

        const releaseData = await releaseResponse.json();
        const quizDateData = await quizDateResponse.json();

        setCurrentReleaseDay(Number(releaseData.value) || 0);
        setDailyQuizStartDate(quizDateData.value || '2026-07-14');
      } catch (err) {
        setError(err.message);
      }
    };

    if (isAdmin) fetchSettings();
  }, [isAdmin]);

  // Handle day button click
  const handleDayClick = async (day) => {
    if (!user?.token || isUpdating) return;

    setIsUpdating(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Update release day on server
      const selectedCohort = typeof window !== 'undefined' ? localStorage.getItem('selectedCohort') : null;
      const cohortQuery = selectedCohort ? `?cohort=${encodeURIComponent(selectedCohort)}` : '';
      const response = await fetch(`${API_BASE_URL}/api/config/html-release-day${cohortQuery}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ value: day }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to update release day');
      }

      // Update local state
      setCurrentReleaseDay(day);

      // Navigate to first route of the selected day
      const firstRoute = getFirstRouteForDay(day);
      if (firstRoute) {
        navigate(firstRoute);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleQuizDateSave = async () => {
    if (!user?.token || isUpdatingQuizDate) return;

    setIsUpdatingQuizDate(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const selectedCohort = typeof window !== 'undefined' ? localStorage.getItem('selectedCohort') : null;
      const cohortQuery = selectedCohort ? `?cohort=${encodeURIComponent(selectedCohort)}` : '';

      const response = await fetch(`${API_BASE_URL}/api/config/daily-quiz-start-date${cohortQuery}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ value: dailyQuizStartDate }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to update daily quiz start date');
      }

      setSuccessMessage('Daily quiz start date updated.');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUpdatingQuizDate(false);
    }
  };

  if (!isAdmin) {
    return <UnderDevelopment section="Settings" />;
  }

  const totalUnlocked = getTotalUnlockedRoutes(currentReleaseDay);

  return (
    <div className="settings__container">
      <div className="settings__header">
        <div className="settings__header-title">
          <h1><FileText size={25} /> Settings</h1>
          <p className="settings__header-subtitle">Manage course content release</p>
        </div>
      </div>

      <div className="content__release">
        <div className="release__header">
          <p>{getDayLabel(currentReleaseDay)}</p>
          <p>{totalUnlocked} routes currently unlocked</p>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>

        <div className="days__btn">
          {Array.from({ length: 26 }, (_, i) => i + 1).map((day) => {
            const isActive = day === currentReleaseDay;
            const isUnlocked = day <= currentReleaseDay;
            return (
              <button
                key={day}
                className={`day-button ${isActive ? 'active' : ''} ${isUnlocked ? 'unlocked' : ''}`}
                onClick={() => handleDayClick(day)}
                disabled={isUpdating}
                aria-pressed={isActive}
              >
                Day {day}
              </button>
            );
          })}
        </div>
      </div>

      <div className="content__release" style={{ marginTop: '24px' }}>
        <div className="release__header">
          <p>Daily Quiz Start Date</p>
          <p>Choose the first day that the quiz series should begin.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <input
            type="date"
            value={dailyQuizStartDate}
            onChange={(event) => setDailyQuizStartDate(event.target.value)}
            disabled={isUpdatingQuizDate}
            style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #d5d7db' }}
          />
          <button
            onClick={handleQuizDateSave}
            disabled={isUpdatingQuizDate}
            style={{ padding: '10px 14px', borderRadius: '8px', border: 'none', background: '#4f46e5', color: '#fff', cursor: 'pointer' }}
          >
            {isUpdatingQuizDate ? 'Saving...' : 'Save Date'}
          </button>
        </div>
      </div>
    </div>
  );
}
