import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Lightning from './Lightning';
import Introduction from './Introduction';



const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='introduction' component={Introduction} title = "SNORESTORM" />
        <Scene key='lightning' component={Lightning} title = "SNORESTORM" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
