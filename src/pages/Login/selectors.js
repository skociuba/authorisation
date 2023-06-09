import {createSelector} from 'reselect';

export const loginSelector = (state) => state.login?.login || null;

export const loginDataSelector = createSelector(
  loginSelector,
  (login) => login?.data?.payload || null,
);
export const errorSelector = createSelector(loginSelector, (login) => login?.error || null);

export const loginLoadingSelector = createSelector(loginSelector, (login) =>
  login?.loading === undefined ? false : login?.loading,
);
