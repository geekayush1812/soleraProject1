import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function PicturelessAvatar({text, style}) {
  return (
    <View style={[Styles.Container, {...style}]}>
      <Text style={Styles.Text}>{text}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default PicturelessAvatar;
