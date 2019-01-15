import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class FooterNavButton extends Component<{}> {

  constructor(props) {
    super(props);
    this._onNextButtonPressed  = this._onNextButtonPressed.bind(this);
  }

  _onNextButtonPressed = (location) => {
    if (this.props.selectedIndex)
      this._handleResponse(location);
    else
      Alert.alert('Please make a selection before proceeding to the next page');
  }

  _handleResponse = (location) => {
    //for now just initialRoute
    switch (location) {
      case 'Lightning' :
        Actions.lightning();
        break;
      case 'Thunder' :
        Actions.thunder();
        break;
      case 'Sensitivity' :
        Actions.sensitivity();
        break;
      case 'Main' :
        Actions.main();
        break;
      default :
        Actions.introduction();
    }
  }

  buttonView() {
    if (this.props.killbutton) {
      return null;
    } else {
      return (
        <TouchableOpacity style={style.button} onPress={() => this._onNextButtonPressed (this.props.navigateTo)}>
          <Text style={style.buttonText}> Next </Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <View>
        {this.buttonView()}
      </View>
    );


  };

};


const style = {
  button: {
    backgroundColor: '#3377ff',
    borderRadius: 0,
    padding: 10,
    margin: 10,
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
