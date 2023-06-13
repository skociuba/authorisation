import {Outlet, Navigate} from 'react-router-dom';

const OnlyForStaff = ({isProtected}) => {
  const role = window.localStorage.getItem('role');

  return role === '"admin"' ? (
    <Outlet />
  ) : isProtected ? (
    <Navigate to="/denied-page" />
  ) : (
    <Outlet />
  );
};

export default OnlyForStaff;
