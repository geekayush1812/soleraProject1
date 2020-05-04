import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function DmzButton({text, icon = false, theme, onPress, style}) {
  return (
    <View style={[Styles.Container, style ? style.Container : null]}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        onPress={onPress}>
        {icon ? icon : null}
        <Text
          style={[
            Styles.Text,
            {color: theme === 'dark' ? '#fff' : '#000'},
            style ? style.Text : null,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    height: 50,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DmzButton;
