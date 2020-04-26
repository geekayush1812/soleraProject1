import React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import TopNavBar from '../../components/TopNavBar/TopNavBar';

import CustomButton from '../../components/CustomButton/CustomButton.component';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';
import Header from '../../components/header/header.component';
import ContentContainer from '../../components/ContentContainer/contentContainer.component';

import Semicircleblue from '../../assets/svg/semicircleblue.svg';
import Squareblue from '../../assets/svg/squareblue.svg';
import Squareyellow from '../../assets/svg/squareyellow.svg';
import CurveFooter from '../../assets/svg/curve_footer.svg';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../config/styles/color';

function ProcessingMoneyScreen({navigation}) {
  const dimen = useWindowDimensions();
  return (
    <View style={ProcessingMoneyScreenStyles.Container}>
      <Header
        style={{
          Container: {
            flex: 2,
          },
        }}
      />
      <ContentContainer
        style={{
          Container: ProcessingMoneyScreenStyles.ContentContainer,
        }}>
        <Semicircleblue style={ProcessingMoneyScreenStyles.SemiBlue} />
        <Squareblue style={ProcessingMoneyScreenStyles.SquareBlue} />
        <Squareyellow style={ProcessingMoneyScreenStyles.SquareYellow} />
        <Text style={ProcessingMoneyScreenStyles.HeroText}>
          Sending Money {'\n'}
          to Bella Campbell
        </Text>
        <CustomButton
          title="$589"
          disabled={true}
          style={{
            Touchable: ProcessingMoneyScreenStyles.CustomButton,
          }}
        />
        <LinearGradient
          colors={[color.header_grad_one, color.header_grad_two]}
          useAngle={true}
          angle={-180}
          style={ProcessingMoneyScreenStyles.Footer}>
          <CurveFooter style={ProcessingMoneyScreenStyles.FooterCurve} />
          <View style={ProcessingMoneyScreenStyles.ProfileImage}>
            <RoundedImageHolder
              index={0}
              sourceUrl={require('../../assets/jpg/person1.jpg')}
              style={{
                ImageWrapper: {
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                },
              }}
            />
          </View>
          <CustomButton
            title="Confirm"
            style={{
              Touchable: {
                top: '50%',
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
              },
              Container: {
                backgroundColor: '#E55F92',
                padding: 20,
              },
              Text: {
                color: '#fff',
              },
            }}
            onPress={() => navigation.navigate('TransactionSummary')}
          />
        </LinearGradient>
      </ContentContainer>
    </View>
  );
}
const ProcessingMoneyScreenStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-end',
  },
  ContentContainer: {
    flex: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    transform: [
      {
        scaleY: 1.1,
      },
      {
        translateY: -10,
      },
    ],
    position: 'relative',
  },
  SemiBlue: {
    position: 'absolute',
    top: '50%',
    right: '8%',
    zIndex: 100,
  },
  SquareYellow: {
    position: 'absolute',
    right: '6%',
    top: '10%',
  },
  SquareBlue: {
    position: 'absolute',
    top: '30%',
    left: '10%',
  },
  HeroText: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 0.5,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  CustomButton: {
    padding: 20,
    width: 200,
    marginBottom: 120,
  },
  Footer: {
    flex: 2,
    width: '100%',
  },
  FooterCurve: {
    position: 'absolute',
    top: '-45%',
    left: '-8%',
    zIndex: 10,
  },
  ProfileImage: {
    position: 'absolute',
    top: '-40%',
    left: '45%',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 80,
    padding: 5,
    borderColor: '#E55F92',
    zIndex: 100,
    transform: [
      {
        translateX: -40,
      },
      {
        translateY: 30,
      },
    ],
  },
});
export default ProcessingMoneyScreen;
