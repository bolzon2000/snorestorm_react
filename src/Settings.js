import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const list = [
  {
    title: 'Lightning',
    icon: 'flash',
    destination: 'lightning'
  },
  {
    title: 'Thunder',
    icon: 'thunder-cloud',
    destination: 'thunder'
  },
  {
    title: 'Sensitivity',
    icon: 'gauge',
    destination: 'sensitivity'
  },
]

_navigate = (destination) => {
  switch (destination) {
    case 'lightning':
      Actions.lightning({killbutton:'true'});
      break;
    case 'thunder':
      Actions.thunder({killbutton:'true'});
      break;
    case 'sensitivity':
      Actions.sensitivity({killbutton:'true'});
      break;
    default:
      console.log('no destination for settings found');
      break;
  }
}

const Settings = () => {
  return (
    <View>
    <List>
      {
        list.map((item) => (
          <ListItem
            key={item.title}
            title={item.title}
            leftIcon={{name: item.icon, type:"entypo"}}
            onPress={() => {_navigate(item.destination)}}
          />
        ))
      }
    </List>
  </View>
  );
};

export default Settings;
