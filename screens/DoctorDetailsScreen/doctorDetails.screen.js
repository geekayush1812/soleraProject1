import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../components/header/header.component';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';
import {ScrollView} from 'react-native-gesture-handler';
import BasicCard from '../../components/BasicCard/basicCard.component';

function DoctorDetailsScreen() {
  return (
    <View style={DoctorDetailsScreenStyles.Container}>
      <Header
        hideOverlay={true}
        style={{
          Container: {
            backgroundColor: '#7774F5',
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            position: 'relative',
            zIndex: 999,
          },
        }}>
        <Text style={DoctorDetailsScreenStyles.HeaderTextDoctorName}>
          Dr.Haley
        </Text>
        <Text style={DoctorDetailsScreenStyles.HeaderTextDoctorSpecialization}>
          General dentist
        </Text>
        <View
          style={DoctorDetailsScreenStyles.HeaderViewDoctorExperienceDetails}>
          <View
            style={
              DoctorDetailsScreenStyles.HeaderViewDoctorExperienceDetailsPatients
            }>
            <Fontisto name="doctor" size={38} color="#e1e1e1" />
            <View style={{marginLeft: 5}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                1.5K
              </Text>
              <Text style={{color: '#e1e1e1'}}>Patients</Text>
            </View>
          </View>
          <View
            style={
              DoctorDetailsScreenStyles.HeaderViewDoctorExperienceDetailsExperience
            }>
            <MaterialCommunityIcons
              name="timer-sand"
              size={38}
              color="#e1e1e1"
            />
            <View>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                5 Years
              </Text>
              <Text style={{color: '#e1e1e1'}}>Experience</Text>
            </View>
          </View>
        </View>
        <RoundedImageHolder
          style={{
            ImageWrapper: {
              height: 120,
              width: 120,
              position: 'absolute',
              top: '100%',
              left: '40%',
              borderWidth: 10,
              borderRadius: 100,

              transform: [
                {
                  translateX: -100,
                },
                {
                  translateY: 30,
                },
              ],
            },
          }}
          sourceUrl={require('../../assets/jpg/person2.jpg')}
        />
      </Header>
      <View style={DoctorDetailsScreenStyles.ContentContainer}>
        <View style={DoctorDetailsScreenStyles.ContentContainerTabs}>
          <Text style={DoctorDetailsScreenStyles.ContentContainerTab}>
            About
          </Text>
          <Text>Calender</Text>
          <Text>Feedback</Text>
          <MaterialCommunityIcons name="dots-horizontal" size={32} />
        </View>
        <ScrollView
          style={{
            padding: 15,
            paddingLeft: 25,
            paddingRight: 25,
          }}>
          <View style={{flex: 1}}>
            <Text style={DoctorDetailsScreenStyles.DoctorsHeader}>Bio</Text>
            <Text style={DoctorDetailsScreenStyles.DoctorsDetail}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sedLorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed
            </Text>
            <Text style={DoctorDetailsScreenStyles.DoctorsHeader}>
              Board Certifications
            </Text>
            <Text style={DoctorDetailsScreenStyles.DoctorsDetail}>Mon-Fri</Text>
            <Text style={DoctorDetailsScreenStyles.DoctorsHeader}>
              Professional memberships
            </Text>
            <Text style={DoctorDetailsScreenStyles.DoctorsDetail}>Mon-Fri</Text>
          </View>
        </ScrollView>
      </View>
      <View style={DoctorDetailsScreenStyles.BottomActionBar}>
        <BasicCard
          style={{
            CardContainer: {
              padding: 15,
              flex: 2,
              height: 'auto',
              marginRight: 25,
            },
          }}>
          <MaterialCommunityIcons name="heart" size={28} color="#6231CB" />
        </BasicCard>
        <BasicCard
          style={{
            CardContainer: {
              height: 'auto',
              flex: 8,
              marginRight: 0,
              backgroundColor: '#F4C130',
              padding: 20,
            },
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>
            Book Appointment
          </Text>
        </BasicCard>
      </View>
    </View>
  );
}

const DoctorDetailsScreenStyles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff'},
  HeaderTextDoctorName: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: -40,
    letterSpacing: 1,
    marginBottom: 5,
  },
  HeaderTextDoctorSpecialization: {
    textAlign: 'center',
    color: '#eee',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  HeaderViewDoctorExperienceDetails: {
    flexDirection: 'row',
    marginTop: 10,
  },
  HeaderViewDoctorExperienceDetailsPatients: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderViewDoctorExperienceDetailsExperience: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  ContentContainer: {
    flex: 1,
    zIndex: 10,
  },
  ContentContainerTabs: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ContentContainerTab: {
    padding: 4,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F4C130',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#2f2f2f',
  },
  DoctorsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f1f1f',
    marginBottom: 5,
  },
  DoctorsDetail: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#5f5f5f',
    marginBottom: 10,
  },
  BottomActionBar: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default DoctorDetailsScreen;
