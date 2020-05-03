import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function DmzButton({text, icon = false, theme, onPress, style}) {
  return (
    <TouchableOpacity
      style={[Styles.Container, style ? {...style.Container} : null]}
      onPress={onPress}>
      {icon ? icon : null}
      <Text
        style={[
          Styles.Text,
          {color: theme === 'dark' ? '#fff' : '#000'},
          style ? {...style.Text} : null,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  Container: {
    height: 50,
    width: 80,
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
