/**
* @Author: gianglengoc
* @Date:   2016-09-01T10:15:25+07:00
* @Last modified by:   gianglengoc
* @Last modified time: 2016-09-02T00:03:21+07:00
*/

import React, { Component } from 'react';
import {
  TouchableHightligh,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class event_listener extends Component {

  didPressButton(event) {
    console.log('log me');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.container} onPress={this.didPressButton.bind(this)}>
          <Text>Tap me!!!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('event_listener', () => event_listener);
