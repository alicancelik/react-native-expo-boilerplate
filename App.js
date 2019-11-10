import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import {
  Platform, StatusBar, StyleSheet, View
} from 'react-native';
import { Root } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
// import * as Sentry from 'sentry-expo';
import configureStore from './configureStore';
import SpaceMono from './assets/fonts/SpaceMono-Regular.ttf';
import AppNavigator from './navigation/AppNavigator';

// Sentry.init({
//   dsn: 'DSN', // Add your id for Error Tracking.
//   enableInExpoDevelopment: true,
//   debug: true
// });
const store = configureStore();

if (__DEV__) {
  /* eslint no-undef: 0 */
  XMLHttpRequest = global.originalXMLHttpRequest //eslint-disable-line
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;
}
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { skipLoadingScreen } = props;

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Root>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </Root>
      </View>
    </Provider>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // require('./assets/images/robot-dev.png'),
      // require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      'space-mono': SpaceMono,
    }),
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
});
