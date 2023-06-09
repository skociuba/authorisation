import {call, put, all, takeLatest} from 'redux-saga/effects';

import {loginAction, fetchLoginSuccess, fetchLoginFail} from './actions';
import {sendLoginData} from './transport';

export function* getLoginSaga(action) {
  try {
    const response = yield call(sendLoginData, {queryParams: action.payload});
    if (!response) {
      throw console.log('not found');
    }
    yield put(fetchLoginSuccess({data: response || null}));
  } catch (e) {
    yield put(fetchLoginFail(e));
  }
}

export default function* () {
  yield all([takeLatest(loginAction.FETCH_LOGIN, getLoginSaga)]);
}
