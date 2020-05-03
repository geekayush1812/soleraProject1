import React from 'react';
import {View, StyleSheet} from 'react-native';

function IndicatorDot({isActive = false, activeColor = '#000'}) {
  return (
    <View
      style={[
        Styles.Container,
        {backgroundColor: isActive ? activeColor : '#C4C4C4'},
      ]}></View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    height: 9,
    width: 9,
    borderRadius: 9,
  },
});
export default IndicatorDot;
