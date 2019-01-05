import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Lightning from './Lightning';
import Thunder from './Thunder';
import Sensitivity from './Sensitivity';
import Main from './Main';
import Introduction from './Introduction';
import Settings from './Settings';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='introduction' component={Introduction} title = "SNORESTORM"   />
        <Scene key='lightning' component={Lightning} title = "SNORESTORM" />
        <Scene key='thunder' component={Thunder} title = "SNORESTORM" />
        <Scene key='sensitivity' component={Sensitivity} title = "SNORESTORM"  />
        <Scene key='settings' component={Settings} title = "SETTINGS"  />
        <Scene key='main' component={Main} title = "SNORESTORM" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
