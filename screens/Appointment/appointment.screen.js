import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import Header from '../../components/header/header.component';

import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';
import ToggleButton from '../../components/ToggleButton/toggleButton.component';
import ContentContainer from '../../components/ContentContainer/contentContainer.component';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import TimelineContainer from './component/timelineContainer.component';
import MonthOfCalendar from './component/MonthOfCalendar.component';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation.component';

function AppointmentScreen() {
  const [timeline, setTimeline] = useState(1);
  const [tabIndex, settabIndex] = useState(0);
  const tabIndexPos = useRef(new Animated.Value(0)).current;
  const months = useRef([
    {
      month: 1,
      name: 'January',
    },
    {
      month: 2,
      name: 'February',
    },
    {
      month: 3,
      name: 'March',
    },
    {
      month: 4,
      name: 'April',
    },
    {
      month: 5,
      name: 'May',
    },
    {
      month: 6,
      name: 'June',
    },
    {
      month: 7,
      name: 'July',
    },
    {
      month: 8,
      name: 'August',
    },
    {
      month: 9,
      name: 'September',
    },
    {
      month: 10,
      name: 'October',
    },
    {
      month: 11,
      name: 'November',
    },
    {
      month: 12,
      name: 'December',
    },
  ]).current;
  const onTapTab0 = useCallback(
    function () {
      if (tabIndex === 1) {
        Animated.sequence([
          Animated.timing(tabIndexPos, {
            toValue: 0,
            easing: Easing.back(),
            duration: 500,
            useNativeDriver: false,
          }),
        ]).start(() => settabIndex(0));
      }
    },
    [tabIndex],
  );
  const onTapTab1 = useCallback(
    function () {
      if (tabIndex === 0) {
        Animated.sequence([
          Animated.timing(tabIndexPos, {
            toValue: 1,
            easing: Easing.back(),
            duration: 500,
            useNativeDriver: false,
          }),
        ]).start(() => settabIndex(1));
      }
    },
    [tabIndex],
  );
  const Data = [
    {
      _id: 1,
      PatientName: 'Bella Campbell',
      Timing: '9:00 AM',
      Age: '26 yrs',
      Disease: 'Medical Checkup',
      Profile: (
        <RoundedImageHolder
          sourceUrl={require('../../assets/jpg/person1.jpg')}
          style={{
            ImageWrapper: {
              height: 70,
              width: 70,
              borderWidth: 0,
            },
          }}
        />
      ),
    },
    {
      _id: 2,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <RoundedImageHolder
          sourceUrl={require('../../assets/jpg/person2.jpg')}
          style={{
            ImageWrapper: {
              height: 70,
              width: 70,
              borderWidth: 0,
            },
          }}
        />
      ),
    },
    {
      _id: 3,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <RoundedImageHolder
          sourceUrl={require('../../assets/jpg/person3.jpg')}
          style={{
            ImageWrapper: {
              height: 70,
              width: 70,
              borderWidth: 0,
            },
          }}
        />
      ),
    },
    {
      _id: 4,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <RoundedImageHolder
          sourceUrl={require('../../assets/jpg/person3.jpg')}
          style={{
            ImageWrapper: {
              height: 70,
              width: 70,
              borderWidth: 0,
            },
          }}
        />
      ),
    },
    {
      _id: 5,
      PatientName: 'Michael Brown',
      Timing: '10:00 AM',
      Age: '26 yrs',
      Disease: 'Stomach upset',
      Profile: (
        <RoundedImageHolder
          sourceUrl={require('../../assets/jpg/person3.jpg')}
          style={{
            ImageWrapper: {
              height: 70,
              width: 70,
              borderWidth: 0,
            },
          }}
        />
      ),
    },
  ];

  return (
    <View style={AppointmentScreenStyle.Container}>
      <Header
        style={{
          Container: {
            backgroundColor: '#7774F5',
            flex: 3,
          },
          ChildContainer: {
            top: '-5%',
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
        <Text style={AppointmentScreenStyle.HeaderPrimaryText}>
          Appointment (8)
        </Text>
        <ToggleButton text="NOW" />
      </Header>
      <ContentContainer
        style={{
          Container: {
            flex: 6,
          },
        }}>
        <View style={AppointmentScreenStyle.SwitchSliderContainer}>
          <View style={AppointmentScreenStyle.SwitchSliderTextContainer}>
            <TouchableOpacity
              onPress={onTapTab0}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Text
                style={[
                  AppointmentScreenStyle.SwitchSliderText,
                  {
                    color: tabIndexPos.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['#fff', '#000'],
                    }),
                  },
                ]}>
                Appointments
              </Animated.Text>
            </TouchableOpacity>
          </View>
          <View style={AppointmentScreenStyle.SwitchSliderTextContainer}>
            <TouchableOpacity
              onPress={onTapTab1}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Text
                style={[
                  AppointmentScreenStyle.SwitchSliderText,
                  {
                    color: tabIndexPos.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['#000', '#fff'],
                    }),
                  },
                ]}>
                Calendar
              </Animated.Text>
            </TouchableOpacity>
          </View>
          <Animated.View
            style={[
              AppointmentScreenStyle.SwitchSlider,
              {
                left: tabIndexPos.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '50%'],
                }),
              },
            ]}
          />
        </View>
        {tabIndex === 0 ? (
          <Animated.FlatList
            style={{
              flex: 1,
              paddingTop: 10,
              transform: [
                {
                  scale: tabIndexPos.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            }}
            data={Data}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({item}) => (
              <TimelineContainer
                PatientName={item.PatientName}
                Timing={item.Timing}
                onPress={() => setTimeline(item._id)}
                Age={item.Age}
                Disease={item.Disease}
                Profile={item.Profile}
                active={item._id === timeline}
              />
            )}
          />
        ) : null}
        {tabIndex === 1 ? (
          <Animated.FlatList
            style={{
              transform: [
                {
                  scale: tabIndexPos.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            }}
            data={months}
            keyExtractor={(item) => item.month.toString()}
            renderItem={({item}) => (
              <MonthOfCalendar month={item.month - 1} item={item} />
            )}
          />
        ) : null}
      </ContentContainer>
      <BottomNavigation />
    </View>
  );
}

const AppointmentScreenStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderPrimaryText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  SwitchSliderContainer: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 38,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  SwitchSliderTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 38,
  },
  SwitchSliderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  SwitchSliderTextActive: {
    color: '#fff',
  },
  SwitchSlider: {
    position: 'absolute',
    backgroundColor: '#6231CB',
    height: 60,
    width: '50%',
    left: '0%',
    borderRadius: 38,
    zIndex: -10,
  },
});
export default AppointmentScreen;
