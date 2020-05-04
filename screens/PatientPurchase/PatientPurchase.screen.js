import React from 'react';
import {View, Text} from 'react-native';
import DmzHeader from '../../newComponents/organisms/DmzHeader/DmzHeader';
import Container from '../../newComponents/organisms/Container/Container';
import CardOrder from '../../newComponents/molecules/CardOrder/CardOrder';
import FlatRow from '../../newComponents/molecules/FlatRow/FlatRow';
import DmzSwitch from '../../newComponents/molecules/DmzSwitch/DmzSwitch';
import Section from '../../newComponents/molecules/Section/Section';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ValSlider from '../../newComponents/molecules/ValSlider/ValSlider';

function PatientPurchase() {
  return (
    <View>
      <DmzHeader />
      <Container
        style={{
          height: '75%',
          transform: [{translateY: -40}],
          zIndex: 999,
        }}>
        <FlatRow>
          <CardOrder active />
          <CardOrder />
          <CardOrder />
          <CardOrder />
        </FlatRow>
        <Section HeaderText="My vitals">
          <DmzSwitch
            tabOne={{
              title: 'Male',
              onPress: () => {},
              icon: <MaterialCommunityIcons name="gender-male" size={18} />,
            }}
            tabTwo={{
              title: 'Female',
              onPress: () => {},
              icon: <MaterialCommunityIcons name="gender-female" size={18} />,
            }}
          />
        </Section>
        <Section HeaderText="Weights(kgs)">
          <ValSlider />
        </Section>
        <ValSlider />
      </Container>
    </View>
  );
}
export default PatientPurchase;
