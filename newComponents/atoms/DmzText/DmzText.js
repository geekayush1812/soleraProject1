import React from 'react';
import {Text, StyleSheet} from 'react-native';

function DmzText({text, children, style}) {
  return (
    <Text style={[Styles.Container, {...style}]}>
      {text}
      {children}
    </Text>
  );
}

const Styles = StyleSheet.create({
  Container: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default DmzText;
