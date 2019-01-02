// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


//make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    margin: 40,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'helvetica',
    color: '#FFFFFF',
  }
};

// export a component - make available to other parts of app
export default Header;
