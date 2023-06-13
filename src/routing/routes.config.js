import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import RouteNotFound from 'routing/components/RouteNotFound';
import RequireAuth from 'routing/components/RequireAuth';
import OnlyForStaff from 'routing/components/OnlyForStaff';

import Application from '../pages/Application/Application';
import {shared} from '../sharedConstants';
import useToken from '../utils/hooks/useToken';
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const TestPage = lazy(() => import('../pages/Test/Test'));
const SubRoutes = lazy(() => import('../pages/SubPages/SubRoutes'));
const SecondPage = lazy(() => import('../pages/SubPages/SecondPage'));
const Landing = lazy(() => import('../pages/SubPages/Landing'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const DeniedPage = lazy(() => import('../pages/DeniedPage/DeniedPage'));

const paths = {...shared.routes};

let routes = [
  {
    path: paths.root,
    element: MainPage,
    exact: true,
  },
  {
    path: paths.mainPage.root,
    element: MainPage,
    exact: true,
  },
  {
    path: paths.testPage.root,
    element: TestPage,
    exact: true,
  },
  {
    path: paths.deniedPage.root,
    element: DeniedPage,
    exact: true,
  },
  {
    path: paths.subRoutes.root,
    element: SubRoutes,
    children: [
      {
        path: paths.subRoutes.landing,
        element: Landing,
        protected: false,
      },
      {
        path: paths.subRoutes.secondPages,
        element: SecondPage,
        protected: true,
      },
    ],
  },
  {
    path: '*',
    element: MainPage,
    exact: true,
  },
];

export const Routing = () => {
  const {setToken} = useToken();

  return (
    <Routes>
      <Route element={<RequireAuth />}>
        {routes.map((route, i) => (
          <Route
            path={route.path}
            key={i}
            element={
              <RouteNotFound path={route.path} redirectTo={paths.mainPage.root}>
                <Application>
                  <route.element />
                </Application>
              </RouteNotFound>
            }>
            {route.children
              ? route.children.map((subRoute, e) => (
                  <>
                    <Route element={<OnlyForStaff isProtected={subRoute.protected} />}>
                      <Route path={subRoute.path} key={e} element={<subRoute.element />} />
                    </Route>
                  </>
                ))
              : null}
          </Route>
        ))}
      </Route>

      <Route path={paths.loginPage.root} element={<LoginPage setToken={setToken} />} />
    </Routes>
  );
};
export default Routing;
