import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const KeyboardView = ({
  children
}) => (
  <KeyboardAvoidingView style={s.flexFullScreen} behavior="padding" enabled>
    <TouchableWithoutFeedback style={s.flexFullScreen} onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

const Container = ({
  children, style, ...rest
}) => (
  <SafeAreaView style={{ ...s.flexFullScreen }}>
    {!rest.isScrollable
      ? (
        <KeyboardView>
          {children}
        </KeyboardView>
      )
      : (
        <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      )}
  </SafeAreaView>
);

const s = StyleSheet.create({
  flexFullScreen: { flex: 1 },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? hp(3) : 0,
  },
});

export default Container;
