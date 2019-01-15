import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Lightning from './Lightning';
import Thunder from './Thunder';
import Sensitivity from './Sensitivity';
import Main from './Main';
import Introduction from './Introduction';
import Settings from './Settings';
import store from 'react-native-simple-store';


class RouterComponent extends Component {

  constructor() {
    super();

    this.state = {
      firstTimeSetupComplete: '',
      isInitial: false
    }
  };

  componentDidMount = () => {

    store.get('firstTimeSetupComplete')
     .then(function(res) {
       this.setState({isInitial: res.setting});
     })
     .catch(function(err) {
       console.log('first time in the setup');
     })
     
  }


  render() {

    return (
      <Router
        navigationBarStyle={{backgroundColor: '#003366'}}
        titleStyle={{color: '#FFFFFF'}}
      >
        <Scene key='root'>
          <Scene key='introduction' component={Introduction} title = "SNORESTORM"   />
          <Scene key='lightning' component={Lightning} title = "SNORESTORM" />
          <Scene key='thunder' component={Thunder} title = "SNORESTORM" />
          <Scene key='sensitivity' component={Sensitivity} title = "SNORESTORM"  />
          <Scene key='settings' component={Settings} title = "SETTINGS"  />
          <Scene key='main'
            component={Main}
            title = "SNORESTORM"
            initial={this.state.isInitial}
            onRight={ ()=> Actions.settings()}
            rightButtonImage={require('./Resources/gearIcon.png')}
          />
        </Scene>
      </Router>
     );
   }
};

export default RouterComponent;
