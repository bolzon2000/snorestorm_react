import React, { Component}  from 'react';
import { View } from 'react-native';
import { RadioGroup } from 'react-native-flexi-radio-button';


class ConfigurationBlock extends Component {

  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }
  
  render() {
    return (
      <RadioGroup
        size={24}
        thickness={2}
        color='#3377ff'
        activeColor='#ffffff'
        onSelect = {(index, value) => this.onSelect(index, value)}>
        {this.props.children}
      </RadioGroup>
    );
  }

};

export default ConfigurationBlock;
