// Main application page where snoring is captured
//////////////////////////////////////////////////

'use strict';

//import GraphComponent from '../GraphingComponent';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from 'react-native';
import Sensitivity from './Sensitivity';
import Thunder from './Thunder';
import Lightning from './Lightning';
import MasterLayout from './components/MasterLayout';
import PageSection from './components/PageSection';
import {NativeModules, NativeEventEmitter, requireNativeComponent} from 'react-native';
import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';

// get global stylesheet
var gs = require ('./Resources/g_style');

//global var
//var StormEngine = NativeModules.StormEngine;
//var GraphManager = NativeModules.GraphManager;

const testArray = [5,5,5,0,23,1,36,52,44,23,65,23,43,21,11,43,55];


//const myModuleEvt = new NativeEventEmitter(NativeModules.StormEngine);
const snoreSubscription = null;

export default class MainPage extends Component <{}> {

  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      pause: false,
      snoreCount: "0",
      sessionComplete: false,
    };
    store.save('firstTimeSetupComplete', {
      setting: true
    })


    //callback from native component - updates the snorecount
    /*
    snoreSubscription = myModuleEvt.addListener(
      'snoreDataCallback', (data) =>
        this.setState({ snoreCount: data })
      //(data) => self.setState({ snoreCount: data })
    );
    */


  };

///////////////////////////
// UI Templates
///////////////////////////
  renderStart() {
    if (this.state.recording) {
      if (this.state.pause) {
        return (
          <TouchableOpacity style={[styles.largeButton, {backgroundColor: '#393c46'}]}>
            <Text style={[gs.heading, {color: '#2e3038', marginBottom:0}]}>PAUSED</Text>
          </TouchableOpacity>
        );
      } else {
          return (
            <TouchableOpacity style={[styles.largeButton, {backgroundColor: '#e60000'}]} onPress={this._onStartButtonPressed}>
              <Text style={[gs.heading, {color: '#000000', marginBottom:0 }]}>STOP</Text>
            </TouchableOpacity>
          );
      }
    } else {
       return (
          <TouchableOpacity style={styles.largeButton} onPress={this._onStartButtonPressed}>
            <Text style={[gs.heading, {color: '#000000', marginBottom:0 }]}>START</Text>
          </TouchableOpacity>
       );
    }
  }

  messageArea() {
    if(this.state.recording) {
      return (
        <View style={styles.messageContainer}>
          <Text style={gs.bodysmall}>SNORE COUNT</Text>
          <Text style={[gs.heading, {fontSize: 48}]}>{this.state.snoreCount}</Text>
        </View>
      );
    } else if (this.state.sessionComplete) {
      return (
        <View style={styles.messageContainer}>
          <GraphComponent dataSource={testArray}/>
          <Text style={gs.bodysmall}>SNORE COUNT</Text>
          <Text style={[gs.heading, {fontSize: 48}]}>{this.state.snoreCount}</Text>
        </View>

      );
    } else {
       return (
         <Text style={styles.instructions}>When you are ready for the SnoreStorm, hit start</Text>
       );
    }
  };

  renderPause() {
    if (!this.state.recording) {
      return null;
    } else {
      return (
        <TouchableOpacity style={[styles.smallButton, {borderColor: '#ffcc00'}]} onPress={this._onPauseButtonPressed}>
          <Text style={gs.bodysmall}>{this.state.pause ? 'Resume' : 'Pause'}</Text>
        </TouchableOpacity>
      );
    }
  };

  renderReset() {
    if (!this.state.recording) {
      return null;
    } else {
      return (
      <TouchableOpacity style={[styles.smallButton, {borderColor: '#990000'}]} onPress={this._onResetButtonPressed}>
        <Text style={gs.bodysmall}>Reset</Text>
      </TouchableOpacity>);
    }
  }

/////////////////////////////////
// Button methods //
/////////////////////////////////
  _onStartButtonPressed = () => {

    if (this.state.recording) {
      this.setState({ recording: false, sessionComplete: true });
      //StormEngine.stopTimer();
    } else {
      this.setState({ recording: true, snoreCount: "0", sessionComplete: false});
      //StormEngine.startTimer();
    }
    //save to AWS
    //route
    //this._handleResponse();
  }

  _onResetButtonPressed = () => {
    this.setState({ recording: false, snoreCount: "0", pause: false});
    //native method
    //StormEngine.reset();
  }

  _onPauseButtonPressed = () => {
    if (this.state.pause) {
      this.setState({ pause: false });
      //native method
      //StormEngine.resumeTimer();
    } else {
      this.setState({ pause: true });
      //native method
      //StormEngine.pauseTimer();
    }
  }

  _onSettingsButtonPressed = () => {
    console.log('in here maybe');
    Actions.settings();
  }

  _handleResponse = () => {
    //for now just initialRoute
  }

  render() {
    return (
      <MasterLayout killTopSpacer={true}>
        <PageSection>
          <TouchableOpacity onPress={() => this._onSettingsButtonPressed()}>
            <Image
              source={require('./Resources/gearIcon.png')}
              style={styles.image} />
          </TouchableOpacity>
        </PageSection>
        <PageSection />
        <View style={styles.contentContainer}>
          {this.renderStart()}
        </View>
          {this.messageArea()}
        <PageSection>
          <View style={styles.footerStyle}>
          {this.renderPause()}
          {this.renderReset()}
          </View>
        </PageSection>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'helvetica',
    color: '#FFFFFF',
    margin: 20,
  },
  largeButton: {
    backgroundColor: '#3377ff',
    borderRadius: 140,
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    width: 280,
  },
  smallButton: {
    backgroundColor: '#2e3038',
    borderWidth: 2,
    borderRadius: 40,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin:40,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#2e3038',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 100,
    marginLeft: 20,
    marginRight:20
  },
  image: {
    alignSelf: 'flex-end',
    height:30,
    width: 30,
  },
  footerStyle: {
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
