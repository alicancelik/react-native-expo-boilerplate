import React, { Component } from 'react';
import {
  Text as ReactNativeText, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from '../utils/style';

export default class NativeText extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  findFontFamily = (font) => {
    switch (font) {
      case 'medium': return globalStyles.fontFamilyMedium;
      case 'bold': return globalStyles.fontFamilyBold;
      default: return globalStyles.fontFamily;
    }
  }

  render() {
    const {
      onPress, style, body, font
    } = this.props;
    return (
      <ReactNativeText
        style={{
          fontFamily: this.findFontFamily(font),
          ...styles.textStyle,
          ...style,
        }}
        onPress={onPress}
      >
        {body || this.props.children}
      </ReactNativeText>
    );
  }
}

NativeText.propTypes = {
  style: PropTypes.any,
  body: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.any,
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: globalStyles.fontSizeSmall,
  },
});
