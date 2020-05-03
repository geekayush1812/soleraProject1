import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

function DmzButton({text, icon = false, onPress, style}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[Styles.Container, {...style}]}>
        {icon ? icon : null}
        <Text style={Styles.Text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const Styles = StyleSheet.create({
  Container: {
    minHeight: 50,
    minWidth: 80,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  Text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DmzButton;
