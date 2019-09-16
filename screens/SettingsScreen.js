import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}> Screen C </Text>
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

export default SettingsScreen;
