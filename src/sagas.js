import {all, fork} from 'redux-saga/effects';

import test from './pages/Test/sagas';
import application from './pages/Application/sagas';
import login from './pages/Login/sagas';

const allSagas = [test, application, login];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
