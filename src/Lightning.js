// import a library to help create a component
import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import Header from '../src/components/Header';
import MasterLayout from '../src/components/MasterLayout';
import PageSection from '../src/components/PageSection';
import FooterNavButton from '../src/components/FooterNavButton';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';
import { Icon } from 'react-native-elements';
import store from 'react-native-simple-store';

// get global stylesheet
var gs = require ('../src/Resources/g_style');
//var Storage = require('../src/Resources/storage');

//create a component
 class Lightning extends Component {

   constructor(props) {
     super(props);
     this.onSelect = this.onSelect.bind(this);
     this.state = {
      selectedIndex: null
     }
   };

   componentDidMount = () => {
     store.get('lightning')
      .then((res) =>
	     this.setState({selectedIndex: res.setting})
     ).catch((err) =>
      console.log("lightning page error " + err)
     );
   };

   onSelect = (value) => {
      store.save('lightning', {
        setting: value
      })
   };

   render() {
     return (
       <MasterLayout>
         <PageSection headerSection='YES'>
           <Icon name='flash' type='entypo' color='#ffffff' size={40} />
           <Text style={gs.heading}>Lightning</Text>
           <Text style={[gs.bodystandard, {marginBottom:20}]}>Its just the flash, but hey, it works!</Text>

           <RadioGroup
             selectedIndex={this.state.selectedIndex}
             size={24}
             thickness={2}
             color='#3377ff'
             activeColor='#ffffff'
             onSelect = {(index, value) => this.onSelect(index, value)}>
              <RadioButton value={0}>
                <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                  <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Gentle</Text>
                  <Text style={[gs.bodysmall, {textAlign: 'left'}]}>This is not a bad setting to start off with,
                    just a single flash.
                  </Text>
                </View>
              </RadioButton>
              <RadioButton value={1}>
                <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                  <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Kinda Flashy</Text>
                  <Text style={[gs.bodysmall, {textAlign: 'left'}]}>Couple of flashes, usually fine for light to
                    moderate sleepers.
                  </Text>
                </View>
              </RadioButton>
              <RadioButton value={2}>
                <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                  <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Night Club</Text>
                  <Text style={[gs.bodysmall, {textAlign: 'left'}]}>If youre sleeping with a partner, this setting
                    might get you into trouble. Youve been warned!
                  </Text>
                </View>
              </RadioButton>
            </RadioGroup>
         </PageSection>
         <PageSection>
           <FooterNavButton navigateTo={'Thunder'} killbutton={this.props.killbutton} selectedIndex={this.state.selectedIndex} />
         </PageSection>
       </MasterLayout>
     );
   }
 };

 export default Lightning;
