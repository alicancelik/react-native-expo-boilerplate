import { DO_SIGNIN, DO_SIGNIN_SUCCESS, DO_SIGNIN_FAILURE } from '../../symbols/user';
import HttpClient from '../../utils/HttpClient';

export const doSignInAction = (payload) => ({
  type: DO_SIGNIN,
  payload,
  lastError: null,
});
export const doSignInActionSuccess = (data) => ({
  type: DO_SIGNIN_SUCCESS,
  data,
  lastError: null,
});
export const doSignInActionFailure = (error) => ({
  type: DO_SIGNIN_FAILURE,
  error,
});

export function doLogin(userValues) {
  return (dispatch) => {
    dispatch(doSignInAction({ userValues }));
    HttpClient.post({
      url: 'XXX', // Add Url
      dispatch,
      body: { userValues },
      actionSuccess: doSignInActionSuccess,
      actionFailure: doSignInActionFailure,
    });
  };
}
