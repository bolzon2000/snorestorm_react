import React from 'react';
import { View } from 'react-native';


const MasterLayout = (props) => {
  if (props.killTopSpacer) {
    return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
  } else {
    return (
      <View style={styles.containerStyle}>
        <View />
        {props.children}
      </View>
    );
  }

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
