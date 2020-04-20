import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from '../../../components/CustomButton/CustomButton.component';
import {TouchableOpacity} from 'react-native-gesture-handler';

class ScheduleAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.MonthScrollerRef = React.createRef();
    this.DateScrollerRef = React.createRef();

    this.state = {
      monthIndex: 1,
      dayNdate: [],
      mapDayToDay: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      mapFullDayToDay: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      selectedDate: 1,
      selectedDay: '',
      months: [
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
      ],
    };
  }
  componentDidMount() {
    const m = new Date();
    this.setState(
      {
        monthIndex: m.getMonth(),
      },
      () => {
        this.calculateMonth();
        new Promise(function (resolve, reject) {
          setTimeout(() => {
            resolve();
          }, 1000);
        }).then(() => {
          this.MonthScrollerRef.scrollToIndex({
            index: this.state.monthIndex,
          });
          this.DateScrollerRef.scrollToIndex({
            index: this.state.selectedDate - 5,
          });
        });
      },
    );
  }
  calculateMonth = () => {
    let date = new Date();
    let year = date.getFullYear();
    let arr = [];
    for (let i = 1; i <= 31; i++) {
      let d = new Date(year, this.state.monthIndex, i);
      if (d.getMonth() === this.state.monthIndex) {
        arr.push({day: d.getDay(), date: d.getDate(), month: d.getMonth()});
      } else {
        break;
      }
    }
    this.setState({
      dayNdate: arr,
      selectedDate:
        this.state.monthIndex === date.getMonth() ? date.getDate() : 1,
      selectedDay:
        this.state.monthIndex === date.getMonth()
          ? this.state.mapFullDayToDay[date.getDay()]
          : this.state.mapFullDayToDay[0],
    });
  };
  onForwardMonth = () => {
    if (this.state.monthIndex < 11) {
      this.setState(
        {
          monthIndex: this.state.monthIndex + 1,
        },
        () => {
          this.MonthScrollerRef.scrollToIndex({
            index: this.state.monthIndex,
          });
          this.calculateMonth();
        },
      );
    }
  };
  onBackwardMonth = () => {
    if (this.state.monthIndex > 0) {
      this.setState(
        {
          monthIndex: this.state.monthIndex - 1,
        },
        () => {
          this.MonthScrollerRef.scrollToIndex({
            index: this.state.monthIndex,
          });
          this.calculateMonth();
        },
      );
    }
  };
  formatDateSuffix = (date) => {
    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  render() {
    const {PopupTranslateY, onPress} = this.props;
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
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={this.onBackwardMonth}>
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={28}
                  color="#676767"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 5,
              }}>
              <FlatList
                ref={(ref) => {
                  this.MonthScrollerRef = ref;
                }}
                scrollEnabled={false}
                horizontal={true}
                data={this.state.months}
                style={{
                  overflow: 'hidden',
                }}
                contentContainerStyle={{
                  alignItems: 'center',
                  overflow: 'hidden',
                  justifyContent: 'space-between',
                }}
                renderItem={({item}) => (
                  <View
                    style={{
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{item.name}</Text>
                  </View>
                )}
                keyExtractor={(item) => `${item.month}`}
              />
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={this.onForwardMonth}>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={28}
                  color="#676767"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={ScheduleAppointmentStyles.DayScroller}>
            <FlatList
              ref={(ref) => {
                this.DateScrollerRef = ref;
              }}
              horizontal={true}
              data={this.state.dayNdate}
              keyExtractor={(item) => `${item.date}`}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({selectedDate: item.date}, () =>
                      this.DateScrollerRef.scrollToIndex({
                        index:
                          this.state.selectedDate -
                          (this.state.selectedDate > 5 ? 5 : 0),
                      }),
                    )
                  }>
                  <View
                    style={[
                      ScheduleAppointmentStyles.Day,
                      this.state.selectedDate === item.date
                        ? ScheduleAppointmentStyles.DayActive
                        : null,
                    ]}>
                    <Text style={ScheduleAppointmentStyles.DayText}>
                      {this.state.mapDayToDay[item.day]}
                    </Text>
                    <Text style={ScheduleAppointmentStyles.DayText}>
                      {item.date}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={ScheduleAppointmentStyles.SelectedDate}>
            <Text style={ScheduleAppointmentStyles.SelectedDateText}>
              {`${this.state.selectedDate}${this.formatDateSuffix(
                this.state.selectedDate,
              )} ${this.state.months[this.state.monthIndex].name}, ${
                this.state.selectedDay
              }`}
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
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    borderRadius: 20,
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
