import React from 'react';
import {View, Text} from 'react-native';
import DmzHeader from '../../newComponents/organisms/DmzHeader/DmzHeader';
import Container from '../../newComponents/organisms/Container/Container';
import CardOrder from '../../newComponents/molecules/CardOrder/CardOrder';

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
        <CardOrder active />
      </Container>
    </View>
  );
}
export default PatientPurchase;
