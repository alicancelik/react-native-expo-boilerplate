import * as axios from 'axios';
import { DO_SIGNOUT, DO_SIGNOUT_SUCCESS, DO_SIGNOUT_FAILURE } from '../../symbols/user';
import Config from '../../config';


const URL = `${Config.BASE_URL}${Config.ROUTE_LOGOUT}`; // Check your config path


export const doSignoutAction = (payload) => ({
  type: DO_SIGNOUT,
  payload,
});

export const doSignoutActionSuccess = (payload) => ({
  type: DO_SIGNOUT_SUCCESS,
  payload,
});

export const doSignoutActionFailure = (payload) => ({
  type: DO_SIGNOUT_FAILURE,
  payload,
});

export function doSignOut(data) {
  return (dispatch) => {
    // Dispatch loading to show Spinner on screen
    dispatch(doSignoutAction(data));
    axios.get(
      URL,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Token ${data.token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  };
}
