import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function BottomNavigation() {
  return (
    <View style={BottomNavigationStyles.Container}>
      <Icon name="home" size={30} color="#6231CB" />
      <Icon name="envelope" size={30} color="#D8D8D8" />
      <Icon name="gear" size={30} color="#D8D8D8" />
      <Icon name="heart" size={30} color="#D8D8D8" />
    </View>
  );
}

const BottomNavigationStyles = StyleSheet.create({
  Container: {
    height: 70,
    width: '100%',
    borderRadius: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default BottomNavigation;
