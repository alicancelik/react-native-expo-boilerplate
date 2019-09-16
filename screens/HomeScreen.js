import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import I18n from 'i18n-js';
import ActionSheet from 'react-native-actionsheet';
import translate, { setLocale } from '../utils/translate';


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showActionSheet = () => {
    this.ActionSheet.show();
  }


  detailActions(index) {
    const langCode = index === 0 ? 'en' : 'tr';
    if (I18n.locale === 'en' && index === 1) {
      setLocale(langCode);
      this.setState({ defaultLanguage: 'tr' }); //eslint-disable-line
    } else if (index === 0) {
      setLocale(langCode);
      this.setState({ defaultLanguage: 'en' }); //eslint-disable-line
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>
          {translate('homeScreen.welcome')}
        </Text>
        <ActionSheet
          ref={(r) => this.ActionSheet = r}
          title={translate('homeScreen.whichDoYouLike')}
          options={[translate('homeScreen.english'), translate('homeScreen.turkish'), translate('homeScreen.cancel')]}
          cancelButtonIndex={2}
          onPress={(index) => this.detailActions(index)}
        />
        <TouchableOpacity
          style={styles.changeLanguageButton}
          onPress={this.showActionSheet}
        >
          <Text>
            {translate('homeScreen.changeLanguage')}
          </Text>
        </TouchableOpacity>
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
  changeLanguageButton: {
    padding: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,

  }
});

export default HomeScreen;
