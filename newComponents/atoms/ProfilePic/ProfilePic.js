import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function ProfilePic({sourceurl, style}) {
  return (
    <View style={[ProfilePicStyles.Container, {...style}]}>
      <Image source={sourceurl} style={ProfilePicStyles.Picture} />
    </View>
  );
}

const ProfilePicStyles = StyleSheet.create({
  Container: {
    height: 90,
    width: 86,
    borderRadius: 20,
  },
  Picture: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    resizeMode: 'contain',
  },
});
export default ProfilePic;
