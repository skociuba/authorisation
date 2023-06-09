import {combineReducers} from 'redux';

import test from './pages/Test/reducers';
import application from './pages/Application/reducers';
import login from './pages/Login/reducers';

const rootReducer = () =>
  combineReducers({
    test,
    application,
    login,
  });
export default rootReducer;
