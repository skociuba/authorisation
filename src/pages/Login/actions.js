import {createAction} from 'redux-actions';

import actionNames from '../../utils/actionNames';

export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAIL = 'FETCH_LOGIN_FAIL';

export const loginAction = actionNames([FETCH_LOGIN, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAIL]);

export const fetchLoginData = createAction(loginAction.FETCH_LOGIN);
export const fetchLoginSuccess = createAction(loginAction.FETCH_LOGIN_SUCCESS);
export const fetchLoginFail = createAction(loginAction.FETCH_LOGIN_FAIL);
