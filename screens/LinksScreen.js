import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Link'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}> Screen B </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
});

export default LinksScreen;
