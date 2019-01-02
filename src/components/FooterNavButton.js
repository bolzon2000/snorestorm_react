import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class FooterNavButton extends Component<{}> {

  _onNextButtonPressed = () => {
    this._handleResponse();
  }

  _handleResponse = () => {
    //for now just initialRoute
    Actions.lightning();
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText} onPress={this._onNextButtonPressed}> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const style = {
  button: {
    backgroundColor: '#3377ff',
    borderRadius: 0,
    padding: 10,
    shadowColor: '#666666',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    alignSelf: 'stretch',
    flexGrow: 1
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'helvetica',
    color: '#FFFFFF',
  }
};
