import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  console.log('Route location: ', location);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', {
        state: { from: location.pathname },
        replace: true,
      });
    }
  }, [user, loading, location, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return null;
};

export default PrivateRoute;
