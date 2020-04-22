import React from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function BottomNavigation({PopupTranslateY}) {
  return (
    <Animated.View
      style={[
        BottomNavigationStyles.Container,
        {
          transform: [
            {
              translateY: PopupTranslateY
                ? PopupTranslateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  })
                : 0,
            },
            {
              rotateX: PopupTranslateY
                ? PopupTranslateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  })
                : 0,
            },
          ],
        },
      ]}>
      <Icon name="home" size={30} color="#6231CB" />
      <Icon name="envelope" size={30} color="#D8D8D8" />
      <Icon name="gear" size={30} color="#D8D8D8" />
      <Icon name="heart" size={30} color="#D8D8D8" />
    </Animated.View>
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
    zIndex: -10,
  },
});
export default BottomNavigation;
