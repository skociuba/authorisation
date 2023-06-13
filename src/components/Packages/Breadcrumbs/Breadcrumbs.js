import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import {breadcrumbs, breadcrumbsContainer} from './Breadcrumbs.style';
const Breadcrumbs = ({translations, userName}) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className={breadcrumbsContainer}>
      <span className={breadcrumbs}>
        {location.pathname === '/' ? (
          translations?.breadcrumbs.home
        ) : (
          <Link to="/">{translations?.breadcrumbs.home}</Link>
        )}
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <div key={index}>
              {last ? (
                <span key={to}>&nbsp;&gt; {translations?.breadcrumbs?.[value] || value}</span>
              ) : (
                <span key={to}>
                  &nbsp;&gt; <Link to={to}>{translations?.breadcrumbs?.[value] || value}</Link>
                </span>
              )}
            </div>
          );
        })}
      </span>
      <span>{`${translations?.breadcrumbs?.greeting} : ${userName}`}</span>
    </div>
  );
};

export default Breadcrumbs;
