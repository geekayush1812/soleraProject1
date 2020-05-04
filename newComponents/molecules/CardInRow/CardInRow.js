import React from 'react';
import {View, StyleSheet} from 'react-native';
function CardInRow({children, style}) {
  return (
    <View style={[Styles.Container, style ? style : null]}>{children}</View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default CardInRow;
