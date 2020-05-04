import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  InteractionManager,
  Easing,
} from 'react-native';
import DmzButton from '../../atoms/SwitchButton/SwitchButton';

function DmzSwitch({tabOne, tabTwo}) {
  const [tabIndex, settabIndex] = useState(0);
  const tabIndexPos = useRef(new Animated.Value(0)).current;
  const onTabPress = function () {
    console.log(tabIndex);
    if (tabIndex === 0) {
      InteractionManager.runAfterInteractions(() => {
        Animated.timing(tabIndexPos, {
          toValue: 1,
          easing: Easing.elastic(),
          duration: 500,
          useNativeDriver: false,
        }).start(() => settabIndex(1));
      });
    }
    if (tabIndex === 1) {
      InteractionManager.runAfterInteractions(() => {
        Animated.timing(tabIndexPos, {
          toValue: 0,
          easing: Easing.elastic(),
          duration: 500,
          useNativeDriver: false,
        }).start(() => settabIndex(0));
      });
    }
  };
  return (
    <View style={Styles.Container}>
      <DmzButton
        onPress={() => {
          onTabPress();
          tabOne.onPress();
        }}
        text={tabOne.title}
        icon={tabOne.icon}
        style={{Container: Styles.ButtonContainer}}
      />
      <DmzButton
        text={tabTwo.title}
        style={{Container: Styles.ButtonContainer}}
        icon={tabTwo.icon}
        onPress={() => {
          onTabPress();
          tabTwo.onPress();
        }}
      />
      <Animated.View
        style={[
          Styles.Slider,
          {
            left: tabIndexPos.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '50%'],
            }),
          },
        ]}></Animated.View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: '#C4C4C4',
    borderRadius: 50,
    flexDirection: 'row',
    position: 'relative',
  },
  ButtonContainer: {
    height: 50,
    width: '50%',
    padding: 10,
    borderRadius: 40,
  },
  Slider: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    borderWidth: 2,
    borderRadius: 40,
    left: '0%',
    borderColor: '#4099A6',
  },
});

export default DmzSwitch;
