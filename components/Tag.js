
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import globalStyles from '../utils/style';


export default function Tag(props) {
  const { children } = props;
  const backgroundColor = props.tag ? props.tag.background_color : null;
  const id = props.tag?.id;
  const tagName = props.tag ? props.tag.name : null;

  return (
    <View
      key={id}
      style={props.style}
    >
      <Text style={[
        styles.tagContainer,
        (backgroundColor && { backgroundColor }),
      ]}
      >
        {children || tagName}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  tagContainer: {
    alignSelf: 'flex-start',
    paddingLeft: wp(2.5),
    paddingRight: wp(2.5),
    borderRadius: globalStyles.fontSizeSmall / 2,
    paddingBottom: wp(0.15),
    paddingTop: hp(0.15),
    overflow: 'hidden',
    marginRight: wp(1.25),
    marginLeft: wp(1.25),
    fontFamily: 'Mikado',
    fontSize: globalStyles.fontSizeSmall,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff'
  },
});
