import React from 'react';
import {Text, StyleSheet} from 'react-native';

function SubSupScriptText({type = 'sup', text, style}) {
  const filteredStyle =
    type === 'sup'
      ? {...style, top: '-50%'}
      : {
          ...style,
          bottom: '-50%',
        };

  return <Text style={[Styles.supScript, {...filteredStyle}]}>{text}</Text>;
}

const Styles = StyleSheet.create({
  supScript: {
    position: 'absolute',
    right: 0,
    fontWeight: 'bold',
    fontSize: 8,
  },
});

export default SubSupScriptText;
