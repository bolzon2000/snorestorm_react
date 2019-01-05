import React from 'react';
import { View } from 'react-native';

const PageSection = (props) => {
  return (
    <View style={style.containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    alignContent: 'flex-start',
    margin: 20,
  }
};

export default PageSection;
