import React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import NavigationTopCustom from '../../components/NavigationTopCustom/navigationTopCustom.component';

import CustomButton from '../../components/CustomButton/CustomButton.component';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';

function ProcessingMoneyScreen({navigation}) {
  const dimen = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={ProcessingMoneyScreenStyles.Upper}>
        <NavigationTopCustom theme="dark" />
        <Image
          source={require('../../assets/png/semicirclepink.png')}
          style={ProcessingMoneyScreenStyles.SemiPink}
        />
        <Image
          source={require('../../assets/png/semicircleblue.png')}
          style={ProcessingMoneyScreenStyles.SemiBlue}
        />
        <Image
          source={require('../../assets/png/squareping.png')}
          style={ProcessingMoneyScreenStyles.SquarePink}
        />
        <Image
          source={require('../../assets/png/squareblue.png')}
          style={ProcessingMoneyScreenStyles.SquareBlue}
        />
        <View style={ProcessingMoneyScreenStyles.HeroSec}>
          <View style={ProcessingMoneyScreenStyles.HeroSecTexts}>
            <Text style={ProcessingMoneyScreenStyles.HeroSecText}>
              Sending Money
            </Text>
            <Text style={ProcessingMoneyScreenStyles.HeroSecText}>
              to Bella Campbell
            </Text>
          </View>
          <View style={ProcessingMoneyScreenStyles.HeroSecButton}>
            <CustomButton
              title="$589"
              disabled={true}
              style={{
                Container: {
                  backgroundColor: '#efefef',
                  paddingTop: 30,
                  paddingBottom: 30,
                },
                Text: {
                  fontSize: 20,
                },
              }}
            />
          </View>
        </View>
      </View>
      <View style={ProcessingMoneyScreenStyles.Lower}>
        <ImageBackground
          style={ProcessingMoneyScreenStyles.ImageBackground}
          source={require('../../assets/png/background.png')}>
          <View style={ProcessingMoneyScreenStyles.ProfileImage}>
            <RoundedImageHolder
              index={0}
              sourceUrl={require('../../assets/jpg/person1.jpg')}
              style={{
                ImageWrapper: {
                  height: 120,
                  width: 120,
                  borderRadius: 100,
                },
              }}
            />
          </View>
          <CustomButton
            title="Confirm"
            index={0}
            style={{
              Touchable: {
                top: '60%',
              },
              Container: {
                backgroundColor: '#E55F92',
              },
              Text: {
                color: '#fff',
              },
            }}
            onPress={() => navigation.navigate('TransactionSummary')}
          />
        </ImageBackground>
      </View>
    </View>
  );
}
const ProcessingMoneyScreenStyles = StyleSheet.create({
  Upper: {
    flex: 7,
    backgroundColor: '#fff',
  },
  Lower: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'contain',
    position: 'relative',
    paddingLeft: 25,
    paddingRight: 25,
  },
  SemiBlue: {
    position: 'absolute',
    top: '65%',
    right: '6%',
  },
  SemiPink: {
    position: 'absolute',
    top: '20%',
    left: '15%',
  },
  SquareBlue: {
    position: 'absolute',
    top: '50%',
    left: '10%',
  },
  SquarePink: {
    position: 'absolute',
    top: '40%',
    right: '10%',
  },
  HeroSec: {
    flex: 1,
    alignSelf: 'center',
    top: '30%',
  },
  HeroSecTexts: {
    marginBottom: 30,
  },
  HeroSecButton: {
    marginTop: 30,
  },
  HeroSecLine: {
    backgroundColor: 'red',
    borderWidth: 2,
  },
  HeroSecText: {
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  ProfileImage: {
    position: 'absolute',
    top: '-50%',
    left: '50%',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 80,
    padding: 5,
    borderColor: '#E55F92',
    transform: [
      {
        translateX: -45,
      },
      {
        translateY: 40,
      },
    ],
  },
});
export default ProcessingMoneyScreen;
