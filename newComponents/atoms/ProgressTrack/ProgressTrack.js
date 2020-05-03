import React from 'react';
import {View, StyleSheet} from 'react-native';

function ProgressTrack({ProgressVal, progressColor}) {
  return (
    <View style={[Styles.Container]}>
      <View
        style={[
          Styles.Progress,
          {backgroundColor: progressColor, width: `${ProgressVal}%`},
        ]}></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    height: 10,
    width: '100%',
    backgroundColor: 'rgba(207, 206, 206, 0.56)',
  },
  Progress: {
    height: '100%',
    width: '0%',
    maxWidth: '100%',
  },
});
export default ProgressTrack;
