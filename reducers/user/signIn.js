import { AsyncStorage } from 'react-native';
import {
  DO_SIGNIN,
  DO_SIGNIN_SUCCESS,
  DO_SIGNIN_FAILURE,
  DO_SIGNOUT,
  AUTHENTICATE_TOKEN,
  AUTHENTICATE_TOKEN_SUCCESS,
  AUTHENTICATE_TOKEN_FAILURE,
} from '../../symbols/user';

export const initialState = {
  data: null,
  loading: false,
  error: false,
  isLogged: false,
  signUpData: false,
};

async function storeUser(user) { //eslint-disable-line
  try {
    await AsyncStorage.setItem('auth', user);
  } catch (error) {
    return error;
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DO_SIGNIN:
      return {
        ...state,
        error: false,
        loading: true,
        isLogged: false,
        data: null,
      };

    case DO_SIGNIN_SUCCESS:
      if (action.data.id && action.data.token) {
        storeUser(JSON.stringify(action.data));
      } return {
        ...state,
        data: action.data,
        loading: false,
        error: false,
        isLogged: !!action.data.id,
      };

    case DO_SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: action.error,
      };
    case DO_SIGNOUT:
      AsyncStorage.clear();
      return {
        ...state,
        user: null,
        loading: false,
      };

    case AUTHENTICATE_TOKEN:
      return {
        ...state,
        error: false,
        loading: true,
        authLoading: true,
      };

    case AUTHENTICATE_TOKEN_SUCCESS:
      if (!action.data.id) {
        AsyncStorage.clear();
      }
      return {
        ...state,
        data: action.data.id ? action.data : state.user,
        loading: false,
        authLoading: false,
        errorMesage: !action.data.id ? action.errorMessage : null,
      };

    case AUTHENTICATE_TOKEN_FAILURE:
      AsyncStorage.clear();
      return {
        ...state,
        error: action.error,
        loading: false,
        authLoading: false,
      };
    default:
      return state;
  }
}
