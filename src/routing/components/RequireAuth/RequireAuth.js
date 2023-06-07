import React, {lazy} from 'react';
const Login = lazy(() => import('../../../pages/Login/Login'));
import {Route, Routes} from 'react-router-dom';

import useToken from '../../../utils/hooks/useToken';
const RequireAuth = ({children, paths}) => {
  const {token, setToken} = useToken();
  return (
    <>
      {!token ? (
        <Routes>
          <Route path={paths.loginPage.root} element={<Login setToken={setToken} />} />
        </Routes>
      ) : (
        children
      )}
    </>
  );
};

export default RequireAuth;
