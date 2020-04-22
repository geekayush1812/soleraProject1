import React, {useState, useCallback, useRef, useEffect} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import Header from '../../components/header/header.component';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation.component';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar/searchbar.component';
import BasicCard from '../../components/BasicCard/basicCard.component';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardContent from './components/cardContent.component';
import ScheduleAppointment from './components/scheduleAppointment.component';
import ToggleButton from '../../components/ToggleButton/toggleButton.component';
import ContentContainer from '../../components/ContentContainer/contentContainer.component';

function FindDoctorScreen({navigation}) {
  const [showPopup, setShowPopup] = useState(false);
  const PopupTranslateY = useRef(new Animated.Value(0)).current;
  const onPress = () => {
    Animated.sequence([
      Animated.timing(PopupTranslateY, {
        toValue: showPopup ? 0 : 1,
        easing: Easing.bezier(0.52, 0.5, 0.08, 0.78),
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
    setShowPopup(!showPopup);
  };

  return (
    <View style={FindDoctorScreenStyles.Container}>
      <Header
        style={{
          Container: {
            backgroundColor: '#7774F5',
            flex: 3,
          },
        }}
        hideOverlay="true"
        ProfileNavPic={
          <RoundedImageHolder
            style={{
              ImageWrapper: {
                height: 42,
                width: 42,
              },
            }}
            sourceUrl={require('../../assets/jpg/person1.jpg')}
          />
        }>
        <Text style={FindDoctorScreenStyles.HeaderPrimaryText}>
          Find a doctor
        </Text>
        <ToggleButton text="NOW" />
      </Header>
      <ContentContainer
        style={{
          Container: {
            flex: 5,
          },
        }}>
        <ScrollView style={{marginTop: 8}}>
          <SearchBar />
          <ScrollView
            horizontal={true}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
            }}
            contentContainerStyle={FindDoctorScreenStyles.ContentCardContainer}>
            <BasicCard
              style={{
                CardContainer: {
                  backgroundColor: '#6231CB',
                },
              }}>
              <Icon name="people" size={42} color="#fff" />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Family Physicians
              </Text>
            </BasicCard>
            <BasicCard
              style={{
                CardContainer: {},
              }}>
              <Icon name="people" size={42} color="#000" />
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Pulmonologists
              </Text>
            </BasicCard>
            <BasicCard
              style={{
                CardContainer: {},
              }}>
              <Icon name="heart" size={42} color="#000" />
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Cardiologist
              </Text>
            </BasicCard>
          </ScrollView>
          <View style={FindDoctorScreenStyles.AvailableDoctors}>
            <Text style={FindDoctorScreenStyles.AvailableDoctorsHeaderText}>
              Available Doctors
            </Text>
            <View style={FindDoctorScreenStyles.AvailableDoctorsCardContainer}>
              <BasicCard
                style={{
                  CardContainer: {
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 15,
                    alignItems: 'flex-start',
                    height: 'auto',
                    position: 'relative',
                    paddingBottom: 25,
                  },
                }}>
                <CardContent
                  DoctorName="Dr.Haley"
                  rating={4}
                  onPress={() => navigation.navigate('DoctorDetails')}
                  Specialization="General Dentist"
                  Profile={
                    <RoundedImageHolder
                      sourceUrl={require('../../assets/jpg/person2.jpg')}
                      style={{
                        ImageWrapper: {
                          height: 70,
                          width: 70,
                        },
                      }}
                    />
                  }
                />
              </BasicCard>
              <BasicCard
                style={{
                  CardContainer: {
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 15,
                    alignItems: 'flex-start',
                    height: 'auto',
                    position: 'relative',
                    paddingBottom: 25,
                  },
                }}>
                <CardContent
                  onPress={() => {
                    onPress();
                  }}
                  DoctorName="Dr.Smith"
                  rating={5}
                  Specialization="Orthodontist"
                  Profile={
                    <RoundedImageHolder
                      sourceUrl={require('../../assets/jpg/person4.jpg')}
                      style={{
                        ImageWrapper: {
                          height: 70,
                          width: 70,
                        },
                      }}
                    />
                  }
                />
              </BasicCard>
              <BasicCard
                style={{
                  CardContainer: {
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 15,
                    alignItems: 'flex-start',
                    height: 'auto',
                    position: 'relative',
                    paddingBottom: 25,
                  },
                }}>
                <CardContent
                  onPress={() => {
                    onPress();
                  }}
                  DoctorName="Dr.Smith"
                  rating={5}
                  Specialization="Orthodontist"
                  Profile={
                    <RoundedImageHolder
                      sourceUrl={require('../../assets/jpg/person4.jpg')}
                      style={{
                        ImageWrapper: {
                          height: 70,
                          width: 70,
                        },
                      }}
                    />
                  }
                />
              </BasicCard>
            </View>
          </View>
        </ScrollView>
      </ContentContainer>
      <BottomNavigation PopupTranslateY={PopupTranslateY} />
      <ScheduleAppointment
        PopupTranslateY={PopupTranslateY}
        onPress={onPress}
      />
    </View>
  );
}

const FindDoctorScreenStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderPrimaryText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: -10,
  },
  // Content: {
  //   // position: 'absolute',
  //   width: '100%',
  //   backgroundColor: '#fefefe',
  //   // bottom: 0,
  //   borderTopLeftRadius: 38,
  //   borderTopRightRadius: 38,
  //   transform: [
  //     {
  //       translateY: -60,
  //     },
  //   ],
  // },
  ContentCardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  AvailableDoctors: {
    flex: 1,
    marginTop: 10,
  },
  AvailableDoctorsHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  AvailableDoctorsCardContainer: {
    marginTop: 15,
  },
});
export default FindDoctorScreen;
