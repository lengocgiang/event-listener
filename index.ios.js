import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';

class event_listener extends Component {
  constructor(props) {
    super(props);
    
    this.didPressToObjcButton = this.didPressToObjcButton.bind(this);
  }

  componentWillMount() {
    const {NGListener} = NativeModules;
    this.eventEmitter = new NativeEventEmitter(NativeModules.NGListener);
    
    this.eventEmitter.addListener('CancelEvent', (data) => {
      console.log(data);
    })

    this.eventEmitter.addListener('OKEvent',(data) => {
      console.log(data);
    })
  }

  didPressToObjcButton() {
    // We'll sent event press button to ObjetiveC
    NativeModules.NGListener.showAlert('This is react-native');
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.didPressToObjcButton}>
          <Text style={styles.buttonText}>Sent to Objc</Text>
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    width: 200,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  contentview: {
    width: 300,
    height: 50,
    marginTop: 10,
    backgroundColor: 'red'
  },
});

AppRegistry.registerComponent('event_listener', () => event_listener);
