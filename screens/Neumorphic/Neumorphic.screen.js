import React from 'react';
import {View, Text} from 'react-native';
// import {Shadow, Neomorph} from 'react-native-neomorph-shadows';
import NeomorphTopNav from '../../components/NeomorphTopNav/NeomorphTopNav';
import NeumorphCard from '../../components/NeumorphCard/NeumorphCard';
function Neumorphic() {
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#fafafa',
      }}>
      <NeomorphTopNav HeaderTitle={'Statistic'} />
      <NeumorphCard style={{backgroundColor: '#fafafa'}} />
      <NeumorphCard
        style={{
          width: 200,
          height: 200,
          borderRadius: 200,
          shadowRadius: 10,
          padding: 40,
          backgroundColor: '#fafafa',
        }}>
        <Text>helo</Text>
      </NeumorphCard>
      {/* <Shadow
        inner // <- enable inner shadow
        useArt // <- set this prop to use non-native shadow on ios
        style={{
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 0.2,
          shadowColor: '#000',
          shadowRadius: 10,
          borderRadius: 20,
          backgroundColor: 'white',
          width: 100,
          height: 100,
          // ...include most of View/Layout styles
        }}></Shadow>

      <Neomorph
        inner={false} // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        style={{
          shadowRadius: 15,
          borderRadius: 30,
          backgroundColor: '#eee',
          width: 150,
          height: 150,
          marginTop: 30,
        }}></Neomorph> */}
    </View>
  );
}

export default Neumorphic;
