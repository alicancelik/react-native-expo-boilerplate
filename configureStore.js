import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as axios from 'axios';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {
  AUTHENTICATE_TOKEN,
  AUTHENTICATE_TOKEN_SUCCESS,
  AUTHENTICATE_TOKEN_FAILURE,
} from './symbols/user';
import Config from './config';

const URL = `${Config.BASE_URL}/user/auth/`; // Check your URL, After login action it works.


async function getUser() {
  try {
    const auth = await AsyncStorage.getItem('auth');
    return JSON.parse(auth);
  } catch (error) {
    return error;
  }
}

export const authenticateTokenAction = (payload) => ({
  type: AUTHENTICATE_TOKEN,
  payload,
});

export const authenticateTokenActionSuccess = (data) => ({
  type: AUTHENTICATE_TOKEN_SUCCESS,
  data,
});

export const authenticateTokenActionFailure = (error) => ({
  type: AUTHENTICATE_TOKEN_FAILURE,
  error,
});

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

getUser().then((user) => {
  if (user?.id && user.token) {
    store.dispatch(authenticateTokenAction());
    axios.get(
      URL,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Token ${user.token}`,
          'Content-Type': 'application/json',
        }
      }
    )
      .then((response) => {
        const res = response.data;
        store.dispatch(authenticateTokenActionSuccess(res));
      })
      .catch((error) => {
        // If any other error occurs
        store.dispatch(authenticateTokenActionFailure(error));
      });
  }
}).catch((error) => {
  throw error;
});

export default () => store;
