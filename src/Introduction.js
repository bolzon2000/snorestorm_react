// import a library to help create a component
import React from 'react';
import { Image , Text } from 'react-native';
import Header from '../src/components/Header';
import MasterLayout from '../src/components/MasterLayout';
import PageSection from '../src/components/PageSection';
import ConfigurationStep from '../src/components/ConfigurationStep';
import FooterNav from '../src/components/FooterNav';
import FooterNavButton from '../src/components/FooterNavButton';

// get global stylesheet
var gs = require ('../src/Resources/g_style');

//create a component
const Introduction = () => (
  <MasterLayout>

    <PageSection>
      <Image source={require('../src/Resources/lightningBolt.png')} style={styles.image} />
      <Text style={gs.heading}>Welcome to SnoreStorm</Text>
      <Text style={gs.bodystandard}>Snorestorm is an application that triggers
        the sounds associated with a thunderstorm when you snore. These sounds can wake you up
        just enough to break the snoring cycle, similar to someone giving you a gentle nudge.
      </Text>
      <Text style={gs.bodystandard}>Just a few simple questions and youll be ready to start.
      </Text>
    </PageSection>
    <PageSection>
      <FooterNav>
        <FooterNavButton navigateTo={'Lightning'} />
      </FooterNav>
    </PageSection>
  </MasterLayout>
);

const styles = {
  image: {
    alignSelf: 'center',
    height:60,
    width: 60,
    margin: 20,
  },
};
// render the component to the device
export default Introduction;
