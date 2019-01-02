import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-flexi-radio-button';

var gs = require ('../../src/Resources/g_style');

class ConfigurationStep extends Component {

  render () {
    return (
      <RadioButton value={'item1'}>
        <Text>some text</Text>
      </RadioButton>
    );
  }
};


export default ConfigurationStep;
