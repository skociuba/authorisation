import React from 'react';
import {Link} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
const SubRoutes = () => (
  <>
    SubRoutes
    <nav>
      <Link to="/sub-pages/landing">For All</Link>
      <Link to="/sub-pages/secondPages">Only For Staff</Link>
    </nav>
    <Outlet />
  </>
);

export default SubRoutes;
