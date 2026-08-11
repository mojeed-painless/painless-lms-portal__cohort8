import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import DashboardScreen from '../../pages/DashboardScreen';

const RoleBasedDashboard = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <div>Redirecting...</div>; 
  }

  if (user.role === 'admin') {
    return <Navigate to="/cohorts" replace />;
  }

  return <DashboardScreen />;
};

export default RoleBasedDashboard;