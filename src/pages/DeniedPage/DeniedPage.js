import React from 'react';
import {useNavigate} from 'react-router-dom';

import {contentContainer} from './DeniedPage.style';
const DeniedPage = () => {
  const navigate = useNavigate();
  return (
    <div className={contentContainer}>
      <div>DeniedPage</div>
      <button onClick={() => navigate('/sub-pages')}>{'<- back to main sub page'}</button>
    </div>
  );
};

export default DeniedPage;
