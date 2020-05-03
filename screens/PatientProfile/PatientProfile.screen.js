import React from 'react';
import {View, Text} from 'react-native';
import Profile from '../../newComponents/molecules/Profile';
import Header from '../../components/header/header.component';

function PatientProfile() {
  return (
    <View>
      <Header />
      <Profile
        sourceurl={require('../../assets/jpg/person1.jpg')}
        ProfileName="Nicolas Dave"
        Age="29"
      />
    </View>
  );
}
export default PatientProfile;
