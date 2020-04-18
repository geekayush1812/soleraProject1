import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Header from '../../components/header/header.component';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';
import Card from '../../components/Card/card.component';

function TransactionSummaryScreen() {
  return (
    <View style={{flex: 1}}>
      <Header
        ProfileNavPic={
          <RoundedImageHolder
            index={0}
            sourceUrl={require('../../assets/jpg/person1.jpg')}
            style={{
              ImageWrapper: {
                height: 35,
                width: 35,
                borderWidth: 1,
              },
            }}
          />
        }
        style={{
          ChildContainer: {
            alignSelf: 'flex-start',
            top: '50%',
            left: '10%',
          },
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 25,
            borderRadius: 10,
          }}>
          <Image source={require('../../assets/png/add-icon.png')} />
        </View>
      </Header>
      <Card
        style={{
          backgroundColor: '#E55F92',
          width: 'auto',
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 20,
        }}
        headercomponent="switch"
        balance="$8,567"
      />
      <View style={TransactionSummaryScreenStyles.Popular}>
        <Text style={TransactionSummaryScreenStyles.PopularHeaderText}>
          Popular categories
        </Text>
        <View style={TransactionSummaryScreenStyles.PopularCardContainer}>
          <Card
            style={{
              SecondaryText: {
                color: '#444',
              },
              PrimaryText: {
                color: '#000',
              },
            }}
            headercomponent="visa"
            balance="$8,567"
          />
          <Card
            style={{
              backgroundColor: '#E55F92',
            }}
            headercomponent="switch"
            balance="$8,567"
          />
        </View>
      </View>
    </View>
  );
}

const TransactionSummaryScreenStyles = StyleSheet.create({
  Popular: {
    margin: 15,
    marginLeft: 20,
  },
  PopularHeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  PopularCardContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 0,
  },
});

export default TransactionSummaryScreen;
