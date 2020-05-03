import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Neomorph, Shadow} from 'react-native-neomorph-shadows';

function NeumorphCard({style, inner = false, swapShadows = false, children}) {
  const dimen = useWindowDimensions();
  return (
    <Neomorph
      inner={inner}
      swapShadows={swapShadows}
      style={{
        shadowRadius: 5,
        borderRadius: 15,
        shadowOpacity: 0.1,
        backgroundColor: '#fff',
        width: dimen.width - 50,
        height: 60,
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
        ...style,
      }}>
      {children}
    </Neomorph>
  );
}

export default NeumorphCard;
