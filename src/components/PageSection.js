import React from 'react';
import { View } from 'react-native';

const PageSection = (props) => {
  return (
    <View style={[props.headerSection ? style.containerStyleMargin : style.ContainerStyle]}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    alignContent: 'flex-start',
  },
  containerStyleMargin: {
    alignContent: 'flex-start',
    marginTop: 20,
  }
};

export default PageSection;
