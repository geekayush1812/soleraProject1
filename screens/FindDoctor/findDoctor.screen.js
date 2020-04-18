import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../components/header/header.component';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation.component';
import {ScrollView} from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar/searchbar.component';
import BasicCard from '../../components/BasicCard/basicCard.component';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardContent from './components/cardContent.component';

function FindDoctorScreen({navigation}) {
  return (
    <View style={FindDoctorScreenStyles.Container}>
      <Header
        style={{
          Container: {
            backgroundColor: '#7774F5',
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
        <View style={FindDoctorScreenStyles.HeaderToggleSwitchContainer}>
          <Text style={FindDoctorScreenStyles.HeaderToggleSwitchText}>NOW</Text>
          <View style={FindDoctorScreenStyles.HeaderToggleSwitchDot}></View>
        </View>
      </Header>
      <ScrollView style={FindDoctorScreenStyles.Content}>
        <SearchBar />
        <ScrollView
          horizontal={true}
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
      <BottomNavigation />
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
  HeaderToggleSwitchContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 2,
    width: 70,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  HeaderToggleSwitchText: {
    color: '#6231CB',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  HeaderToggleSwitchDot: {
    height: 20,
    width: 20,
    borderRadius: 25,
    backgroundColor: '#6231CB',
  },
  Content: {
    // position: 'absolute',
    width: '100%',
    backgroundColor: '#fefefe',
    // bottom: 0,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    transform: [
      {
        translateY: -60,
      },
    ],
  },
  ContentCardContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20,
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
