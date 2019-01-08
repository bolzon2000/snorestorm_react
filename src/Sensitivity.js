// import a library to help create a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../src/components/Header';
import MasterLayout from '../src/components/MasterLayout';
import PageSection from '../src/components/PageSection';
import FooterNavButton from '../src/components/FooterNavButton';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';
import { Icon } from 'react-native-elements';
import store from 'react-native-simple-store';

// get global stylesheet
var gs = require ('../src/Resources/g_style');

//create a component
 class Sensitivity extends Component {

   constructor(props) {
     super(props);
     this.onSelect = this.onSelect.bind(this);
     this.state = {
      selectedIndex: null
     }
   };

   componentDidMount = () => {
     store.get('sensitivity')
      .then((res) =>
	     this.setState({selectedIndex: res.setting})
     )
   };

   onSelect = (value) => {
      store.save('sensitivity', {
        setting: value
      })
   };

   render() {
     return (
       <MasterLayout>
         <PageSection>
           <Icon name='gauge' type='entypo' color='#ffffff' size={40} />
           <Text style={gs.heading}>Sensitivity</Text>
           <Text style={gs.bodystandard}>How loud should your snoring be before lightning flashes and thunder crashes? This setting triggers the storm based on the volume of your snoring.</Text>
         </PageSection>
         <PageSection>
           <RadioGroup
             selectedIndex={this.state.selectedIndex}
             size={24}
             thickness={2}
             color='#3377ff'
             activeColor='#ffffff'
             onSelect = {(index, value) => this.onSelect(index, value)}>
              <RadioButton value={0}>
                <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                  <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Quiet</Text>
                  <Text style={[gs.bodysmall, {textAlign: 'left'}]}>The slightest snore will set things in motion. Not good for environments with
                    a lot of background noise.
                  </Text>
                </View>
              </RadioButton>
              <RadioButton value={1}>
                <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                  <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Buzz Saw</Text>
                  <Text style={[gs.bodysmall, {textAlign: 'left'}]}>A setting for people with a relatively loud snore. A good setting for most people
                    with snoring issues.
                  </Text>
                </View>
              </RadioButton>
              <RadioButton value={2}>
                <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                  <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Jet Aircraft</Text>
                  <Text style={[gs.bodysmall, {textAlign: 'left'}]}>Your snoring is a force of nature. Your snoring makes
                    water buffalo jealous.
                  </Text>
                </View>
              </RadioButton>
            </RadioGroup>
         </PageSection>
         <PageSection>
           <FooterNavButton navigateTo={'Main'} killbutton={this.props.killbutton} />
         </PageSection>
       </MasterLayout>
     );
   }
 };

 export default Sensitivity;
