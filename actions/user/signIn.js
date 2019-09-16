import * as axios from 'axios';
import { DO_SIGNIN, DO_SIGNIN_SUCCESS, DO_SIGNIN_FAILURE } from '../../symbols/user';
import Config from '../../config';


const URL = `${Config.BASE_URL}${Config.ROUTE_LOGIN}`; // Check your config path

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
    // Dispatch loading to show Spinner on screen
    dispatch(doSignInAction({ userValues }));
    axios.post(URL, {
      username: userValues.username,
      password: userValues.password,
    })
      .then((response) => {
        dispatch(doSignInActionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(doSignInActionFailure(error));
      });
  };
}
