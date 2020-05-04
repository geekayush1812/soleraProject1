import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function DmzText({text, children, style}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={[Styles.Container, style ? style : null]}>{text}</Text>
      {children}
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 30,
  },
});
export default DmzText;
