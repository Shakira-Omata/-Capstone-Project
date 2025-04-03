import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If the user has no account, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
