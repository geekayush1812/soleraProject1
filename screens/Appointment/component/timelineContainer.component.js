import React from 'react';
import {View, StyleSheet} from 'react-native';
import BasicCard from '../../../components/BasicCard/basicCard.component';
import CardContent from './card.component';
import Ring from '../../../assets/svg/ring.svg';
import RingCircle from '../../../assets/svg/ringCircle.svg';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
function TimelineContainer({
  PatientName,
  Timing,
  onPress,
  Age,
  Disease,
  Profile,
  active,
}) {
  return (
    <View style={TimelineContainerStyles.TimelineContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <BasicCard
          style={{
            CardContainer: [
              TimelineContainerStyles.CardContainer,
              active
                ? {backgroundColor: '#F4C130'}
                : {backgroundColor: '#fff', elevation: 0},
            ],
          }}>
          <CardContent
            PatientName={PatientName}
            Timing={Timing}
            // onPress={onPress}
            Age={Age}
            Disease={Disease}
            Profile={Profile}
            active={active}
          />
        </BasicCard>
      </TouchableWithoutFeedback>
      <View style={TimelineContainerStyles.RingCircleContainer}>
        {active ? <RingCircle height={20} /> : <Ring height={20} />}
      </View>
    </View>
  );
}

const TimelineContainerStyles = StyleSheet.create({
  TimelineContainer: {
    marginLeft: 30,
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderLeftColor: '#F4C130',
  },
  CardContainer: {
    marginRight: 15,
    marginBottom: 25,
    alignItems: 'flex-start',
    height: 'auto',
    position: 'relative',
    padding: 20,
    paddingBottom: 25,
    elevation: 1,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  RingCircleContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    left: -16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 30,
    paddingBottom: 5,
  },
});
export default TimelineContainer;
