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
 class Thunder extends Component {

   constructor(props) {
     super(props);
     this.onSelect = this.onSelect.bind(this);
     this.state = {
      selectedIndex: null
     }
   };

   componentDidMount = () => {
     store.get('thunder')
      .then((res) =>
	     this.setState({selectedIndex: res.setting})
     )
   };

   onSelect = (value) => {
      store.save('thunder', {
        setting: value
      })
   };

   render() {
     return (
       <MasterLayout>
         <PageSection>
           <Icon name='thunder-cloud' type='entypo' color='#ffffff' size={40} />
           <Text style={gs.heading}>Thunder</Text>
           <Text style={gs.bodystandard}>How loud should the thunder be during this snorestorm? Decide below!</Text>
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
                <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Gentle Storm</Text>
                <Text style={[gs.bodysmall, {textAlign: 'left'}]}>You are a light sleeper, too much thunder and your sleep might be
                  disturbed. A good place to start.
                </Text>
              </View>
            </RadioButton>
            <RadioButton value={1}>
              <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Heavy Storm</Text>
                <Text style={[gs.bodysmall, {textAlign: 'left'}]}>Good setting for people that are light to moderate sleepers.
                </Text>
              </View>
            </RadioButton>
            <RadioButton value={2}>
              <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Hurricane</Text>
                <Text style={[gs.bodysmall, {textAlign: 'left'}]}>You sleep like the dead. The right setting for heavy sleepers.
                </Text>
              </View>
            </RadioButton>
          </RadioGroup>
         </PageSection>
         <PageSection>
           <FooterNavButton navigateTo={'Sensitivity'} killbutton={this.props.killbutton} />
         </PageSection>
       </MasterLayout>
     );
   }
 };

 export default Thunder;
