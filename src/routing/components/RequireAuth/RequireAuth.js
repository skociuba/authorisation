import {Outlet, Navigate} from 'react-router-dom';

const RequireAuth = () => {
  const token = window.localStorage.getItem('token');
  console.log(token);

  return token ? <Outlet /> : <Navigate to="/login-page" />;
};

export default RequireAuth;
