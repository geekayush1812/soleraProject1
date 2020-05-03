import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Neomorph, Shadow} from 'react-native-neomorph-shadows';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function NeumorphBackButton() {
  return (
    <Neomorph inner swapShadows style={NeumorphBackButtonStyles.Container}>
      <MaterialCommunityIcons name="arrow-left" size={20} color="grey" />
      <Neomorph
        inner={false}
        swapShadows
        style={NeumorphBackButtonStyles.SwitchButton}>
        <View style={NeumorphBackButtonStyles.DotContainer}>
          <Shadow useArt style={NeumorphBackButtonStyles.Dot}></Shadow>
          <Shadow useArt style={NeumorphBackButtonStyles.Dot}></Shadow>
        </View>
        <View style={NeumorphBackButtonStyles.DotContainer}>
          <Shadow useArt style={NeumorphBackButtonStyles.Dot}></Shadow>
          <Shadow useArt style={NeumorphBackButtonStyles.Dot}></Shadow>
        </View>
      </Neomorph>
    </Neomorph>
  );
}

const NeumorphBackButtonStyles = StyleSheet.create({
  Container: {
    shadowRadius: 2,
    borderRadius: 10,
    shadowOpacity: 0.2,
    backgroundColor: '#efefef',
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  SwitchButton: {
    height: 34,
    width: 34,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    justifyContent: 'space-around',
    padding: 5,
    shadowOpacity: 0.4,
    marginLeft: 5,
  },
  DotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Dot: {
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowRadius: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    width: 5,
    height: 5,
  },
});

export default NeumorphBackButton;
