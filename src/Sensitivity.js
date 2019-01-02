// import a library to help create a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../src/components/Header';
import MasterLayout from '../src/components/MasterLayout';
import PageSection from '../src/components/PageSection';
import ConfigurationStep from '../src/components/ConfigurationStep';
import FooterNav from '../src/components/FooterNav';
import FooterNavButton from '../src/components/FooterNavButton';
import ConfigurationBlock from '../src/components/ConfigurationBlock';
import { RadioButton } from 'react-native-flexi-radio-button';

// get global stylesheet
var gs = require ('../src/Resources/g_style');

//create a component
 class Sensitivity extends Component {

   render() {
     return (
       <MasterLayout>
         <PageSection>
           <Text style={gs.heading}>Sensitivity</Text>
           <Text style={gs.bodystandard}>How loud should your snoring be before lightning flashes and thunder crashes?</Text>
         </PageSection>
         <PageSection>
          <ConfigurationBlock>
            <RadioButton value={'item1'}>
              <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Quiet</Text>
                <Text style={[gs.bodysmall, {textAlign: 'left'}]}>The slightest snore will set things in motion. Not good for environments with
                  a lot of background noise.
                </Text>
              </View>
            </RadioButton>
            <RadioButton value={'item2'}>
              <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Buzz Saw</Text>
                <Text style={[gs.bodysmall, {textAlign: 'left'}]}>A setting for people with a relatively loud snore. A good setting for most people
                  with snoring issues.
                </Text>
              </View>
            </RadioButton>
            <RadioButton value={'item3'}>
              <View style={{alignItems:'flex-start', marginLeft:10, marginRight:20}}>
                <Text style={[gs.bodystandard, {textAlign: 'left'}]}>Jet Aircraft</Text>
                <Text style={[gs.bodysmall, {textAlign: 'left'}]}>Your snoring is a force of nature. Your snoring makes
                  water buffalo jealous.
                </Text>
              </View>
            </RadioButton>
          </ConfigurationBlock>
         </PageSection>
         <PageSection>
           <FooterNav>
             <FooterNavButton navigateTo={'Main'} />
           </FooterNav>
         </PageSection>
       </MasterLayout>
     );
   }
 };

 export default Sensitivity;
