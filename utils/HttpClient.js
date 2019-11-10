import * as axios from 'axios';
import {
  AsyncStorage, Platform, StatusBar
} from 'react-native';
import { Toast } from 'native-base';
import Config from '../config';
import AppNavigator from '../navigation/AppNavigator';

export const HttpClient = { //eslint-disable-line
  BASE_URL: Config.BASE_URL,
  errorToast(text) {
    Toast.show({
      text,
      position: 'bottom',
      style: Platform.OS === 'android' ? { marginTop: StatusBar.currentHeight } : {},
      type: 'danger',
    });
  },
  errorHandler(params, error) {
    if (error.response.status === 401) {
      AsyncStorage.clear();
      AppNavigator.navigate('Login');
      params.dispatch(params.actionFailure(error));
    } else if (error.response.status === 400 && params.isShowableToast) {
      HttpClient.errorToast('Error');
    }
  },
  successToast(params) {
    if (params.showSuccessToast) {
      Toast.show({
        text: 'Success',
        position: 'bottom',
        style: Platform.OS === 'android' ? { marginTop: StatusBar.currentHeight } : {},
        type: 'success',
      });
    }
  },
  async getHeader() {
    const user = JSON.parse(await AsyncStorage.getItem('@user'));
    return {
      Authorization: `Token ${user.token}`
    };
  },

  async action(params, service, serviceName) {
    if (params.url === undefined) throw ('please set your url');
    if (params.dispatch === undefined) throw ('please set your dispatch');
    try {
      const headers = await HttpClient.getHeader();
      const fullUrl = params.isFulledUrl ? params.url : `${HttpClient.BASE_URL}${params.url}`;
      let response;
      if (serviceName === 'get' || serviceName === 'delete') {
        response = await service(fullUrl, {
          headers,
          body: params.body || {}
        });
      } else if (serviceName === 'patch') {
        response = await service(fullUrl, params.body, {
          headers,
        });
      } else {
        response = await service(fullUrl, params.body, {
          headers,
        });
      }
      if (params.postId) {
        HttpClient.successToast(params);
        params.dispatch(params.actionSuccess(response.data, params.postId));
      } else {
        HttpClient.successToast(params);
        params.dispatch(params.actionSuccess(response.data));
      }
    } catch (error) {
      HttpClient.errorHandler(params, error);
    }
  },
  get(params) {
    HttpClient.action(params, axios.get, 'get');
  },
  post(params) {
    HttpClient.action(params, axios.post, 'post');
  },
  delete(params) {
    HttpClient.action(params, axios.delete, 'delete');
  },
  patch(params) {
    HttpClient.action(params, axios.patch, 'patch');
  }
};
