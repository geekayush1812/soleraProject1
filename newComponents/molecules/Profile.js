import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfilePic from '../atoms/ProfilePic';
import DmzText from '../atoms/DmzText';

function Profile({sourceurl, ProfileName, Age}) {
  return (
    <View style={Styles.Container}>
      <View style={Styles.ProfilePicContainer}>
        <ProfilePic sourceurl={sourceurl} />
      </View>
      <View style={Styles.ProfileDetail}>
        <DmzText text="Hi," />
        <DmzText text={ProfileName} />
        <DmzText text={`Age ${Age}`} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Profile;
