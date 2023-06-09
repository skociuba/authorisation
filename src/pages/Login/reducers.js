import {handleActions} from 'redux-actions';

import {fetchLoginData, fetchLoginSuccess, fetchLoginFail} from './actions';

export const initialState = {
  test: {
    data: null,
    loading: false,
    error: null,
  },
};
export default handleActions(
  {
    [fetchLoginData](state) {
      return {
        ...state,
        login: {
          ...state.login,
          data: null,
          loading: true,
          error: null,
        },
      };
    },
    [fetchLoginSuccess](state, {payload}) {
      return {
        ...state,
        login: {
          ...state.login,
          data: payload.data,
          loading: false,
          error: null,
        },
      };
    },
    [fetchLoginFail](state, {payload}) {
      return {
        ...state,
        login: {
          ...state.login,
          data: null,
          loading: false,
          error: payload.message,
        },
      };
    },
  },
  initialState,
);
