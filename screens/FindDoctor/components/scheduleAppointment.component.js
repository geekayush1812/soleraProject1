import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from '../../../components/CustomButton/CustomButton.component';

function ScheduleAppointment({PopupTranslateY, onPress}) {
  return (
    <Animated.View
      style={[ScheduleAppointmentStyles.Overlay, {opacity: PopupTranslateY}]}>
      <Animated.View
        style={[
          ScheduleAppointmentStyles.Container,
          {
            transform: [
              {
                translateY: PopupTranslateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                }),
              },
            ],
            opacity: PopupTranslateY,
          },
        ]}>
        <Text style={ScheduleAppointmentStyles.HeaderText}>
          Schedule an appointment
        </Text>
        <View style={ScheduleAppointmentStyles.MonthScroller}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={28}
            color="#676767"
          />
          <Text style={{textAlign: 'center', fontSize: 16}}>January</Text>

          <MaterialCommunityIcons
            name="chevron-right"
            size={28}
            color="#676767"
          />
        </View>
        <View style={ScheduleAppointmentStyles.DayScroller}>
          <View style={ScheduleAppointmentStyles.Day}>
            <Text style={ScheduleAppointmentStyles.DayText}>Mon</Text>
            <Text style={ScheduleAppointmentStyles.DayText}>6</Text>
          </View>
          <View
            style={[
              ScheduleAppointmentStyles.Day,
              ScheduleAppointmentStyles.DayActive,
            ]}>
            <Text style={ScheduleAppointmentStyles.DayText}>Tue</Text>
            <Text style={ScheduleAppointmentStyles.DayText}>7</Text>
          </View>
          <View style={ScheduleAppointmentStyles.Day}>
            <Text style={ScheduleAppointmentStyles.DayText}>Wed</Text>
            <Text style={ScheduleAppointmentStyles.DayText}>8</Text>
          </View>
          <View style={ScheduleAppointmentStyles.Day}>
            <Text style={ScheduleAppointmentStyles.DayText}>Thu</Text>
            <Text style={ScheduleAppointmentStyles.DayText}>9</Text>
          </View>
          <View style={ScheduleAppointmentStyles.Day}>
            <Text style={ScheduleAppointmentStyles.DayText}>Fri</Text>
            <Text style={ScheduleAppointmentStyles.DayText}>10</Text>
          </View>
          <View style={ScheduleAppointmentStyles.Day}>
            <Text style={ScheduleAppointmentStyles.DayText}>Sat</Text>
            <Text style={ScheduleAppointmentStyles.DayText}>11</Text>
          </View>
          <View style={ScheduleAppointmentStyles.Day}>
            <Text style={ScheduleAppointmentStyles.DayText}>Sun</Text>
            <Text style={ScheduleAppointmentStyles.DayText}>12</Text>
          </View>
        </View>
        <View style={ScheduleAppointmentStyles.SelectedDate}>
          <Text style={ScheduleAppointmentStyles.SelectedDateText}>
            7th January,Tuesday
          </Text>
        </View>
        <CustomButton
          onPress={onPress}
          title="Schedule"
          style={{
            Touchable: {
              alignSelf: 'stretch',
              marginTop: 50,
            },
            Container: {
              backgroundColor: '#F4C130',
              height: 40,
            },
            Text: {
              color: '#fefefe',
            },
          }}
        />
      </Animated.View>
    </Animated.View>
  );
}

const ScheduleAppointmentStyles = StyleSheet.create({
  Overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  Container: {
    height: '50%',
    width: '100%',
    backgroundColor: '#fff',
    top: '50%',
    borderRadius: 40,
    padding: 20,
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#575757',
  },
  MonthScroller: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 10,
  },
  DayScroller: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  Day: {
    padding: 4,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  DayText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#575757',
  },
  DayActive: {
    backgroundColor: '#F4C130',
  },
  SelectedDate: {
    marginTop: 20,
  },
  SelectedDateText: {
    fontSize: 22,
    color: '#676767',
    fontWeight: 'bold',
  },
});
export default ScheduleAppointment;
