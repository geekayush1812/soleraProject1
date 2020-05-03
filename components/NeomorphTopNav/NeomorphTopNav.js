import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NeumorphBackButton from '../NeuMorphBackButton/NeumorphBackButton';

function NeomorphTopNav({HeaderTitle}) {
  return (
    <View style={NeomorphTopNavStyles.Container}>
      <View style={NeomorphTopNavStyles.LeftButton}>
        <NeumorphBackButton />
      </View>
      <View style={NeomorphTopNavStyles.Title}>
        <Text style={NeomorphTopNavStyles.TitleText}>{HeaderTitle}</Text>
      </View>
      <View style={NeomorphTopNavStyles.RightButton}></View>
    </View>
  );
}

const NeomorphTopNavStyles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  LeftButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  RightButton: {
    flex: 2,
  },
});

export default NeomorphTopNav;
