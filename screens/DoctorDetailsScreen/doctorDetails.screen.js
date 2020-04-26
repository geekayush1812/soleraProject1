import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../components/header/header.component';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';
import {ScrollView} from 'react-native-gesture-handler';
import BasicCard from '../../components/BasicCard/basicCard.component';
import Available from '../../assets/svg/available.svg';

const DoctorProfile = () => {
  return (
    <View style={DoctorProfileStyles.ContentContainer}>
      <View style={DoctorProfileStyles.ContentContainerTabs}>
        <Text style={DoctorProfileStyles.ContentContainerTab}>About</Text>
        <Text>Calender</Text>
        <Text>Feedback</Text>
        <MaterialCommunityIcons name="dots-horizontal" size={32} />
      </View>
      <ScrollView style={DoctorProfileStyles.DoctorInfoScroll}>
        <View style={{flex: 1}}>
          <Text style={DoctorProfileStyles.DoctorsHeader}>Bio</Text>
          <Text style={DoctorProfileStyles.DoctorsDetail}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sedLorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed
          </Text>
          <Text style={DoctorProfileStyles.DoctorsHeader}>
            Board Certifications
          </Text>
          <Text style={DoctorProfileStyles.DoctorsDetail}>Mon-Fri</Text>
          <Text style={DoctorProfileStyles.DoctorsHeader}>
            Professional memberships
          </Text>
          <Text style={DoctorProfileStyles.DoctorsDetail}>Mon-Fri</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const DoctorProfileStyles = StyleSheet.create({
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
  DoctorInfoScroll: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
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
});

const ConfirmAppointment = () => {
  return (
    <View style={ConfirmAppointmentStyles.Container}>
      <ScrollView style={ConfirmAppointmentStyles.ScrollView}>
        <View style={ConfirmAppointmentStyles.ScheduleAvailability}>
          <View style={ConfirmAppointmentStyles.ScheduleTiming}>
            <MaterialCommunityIcons name="calendar" size={32} color="#6230CC" />
            <View style={ConfirmAppointmentStyles.DateAndTime}>
              <Text style={ConfirmAppointmentStyles.Date}>Friday,March 27</Text>
              <Text style={ConfirmAppointmentStyles.Time}>
                10:00 - 11:00 AM
              </Text>
            </View>
          </View>
          <View style={ConfirmAppointmentStyles.Available}>
            <Available />
            <Text style={ConfirmAppointmentStyles.AvailableText}>
              Available
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const ConfirmAppointmentStyles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 25,
  },
  ScrollView: {
    marginTop: 45,
  },
  ScheduleAvailability: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ScheduleTiming: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DateAndTime: {
    marginLeft: 5,
  },
  Date: {
    color: '#222',
  },
  Time: {
    fontWeight: '600',
    fontSize: 15,
  },
  Available: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function DoctorDetailsScreen() {
  return (
    <View style={DoctorDetailsScreenStyles.Container}>
      <Header
        style={{
          Container: DoctorDetailsScreenStyles.HeaderContainer,
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
            ImageWrapper: DoctorDetailsScreenStyles.DoctorProfilePic,
          }}
          sourceUrl={require('../../assets/jpg/person2.jpg')}
        />
      </Header>
      {/* <DoctorProfile /> */}
      <ConfirmAppointment />
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
  HeaderContainer: {
    backgroundColor: '#7774F5',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    position: 'relative',
    zIndex: 999,
  },
  DoctorProfilePic: {
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
