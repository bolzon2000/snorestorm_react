import React from 'react';
import { View } from 'react-native';

const FooterNav = (props) => {
  return (
    <View style={[props.children.count > 1 ? style.footerContainer : style.footerContainerSingleItem]}>
      {props.children}
    </View>
  );
}

const style = {
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: '#FFFFFF'
  },
  footerContainerSingleItem: {
    margin: 20,
    backgroundColor: '#FFFFFF'
  }
};
export default FooterNav;
