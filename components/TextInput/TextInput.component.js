import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

function TextInputCustom({
  placeholder,
  textContentType,
  keyboardType = 'default',
}) {
  return (
    <View style={TextInputCustomStyles.Container}>
      <TextInput
        textContentType={textContentType}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const TextInputCustomStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    margin: 5,
    paddingLeft: 30,
  },
});

export default TextInputCustom;
