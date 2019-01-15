import React from 'react';
import { View } from 'react-native';


const MasterLayout = (props) => {

  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#003366'
  }
};

export default MasterLayout;
