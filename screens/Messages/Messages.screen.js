import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Header from '../../components/header/header.component';
import ContentContainer from '../../components/ContentContainer/contentContainer.component';
import SearchBar from '../../components/SearchBar/searchbar.component';
import RoundedImageHolder from '../../components/RoundedImageHolder/roundedImageHolder.component';

const Message = ({Profile, Name, Time, Message, MessageCount}) => {
  return (
    <View style={MessageStyles.Container}>
      <View style={MessageStyles.ProfileContainer}>{Profile}</View>
      <View style={MessageStyles.MessageContent}>
        <View style={MessageStyles.CredentialContainer}>
          <Text style={MessageStyles.Name}>{Name}</Text>
          <Text style={MessageStyles.Time}>{Time}</Text>
        </View>
        <View style={MessageStyles.MessageContainer}>
          <Text style={MessageStyles.MessageText}>{Message}</Text>
          <View style={MessageStyles.MessageCount}>
            <Text style={MessageStyles.MessageCountText}>{MessageCount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const MessageStyles = StyleSheet.create({
  Container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  ProfileContainer: {
    marginLeft: 5,
    marginRight: 15,
  },
  MessageContent: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
  },
  CredentialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  Time: {
    marginRight: 10,
  },
  MessageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5,
  },
  MessageText: {
    fontSize: 14,
    color: '#555',
  },
  MessageCount: {
    backgroundColor: '#22C663',
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MessageCountText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 12,
  },
});

function MessagesScreen() {
  return (
    <View style={MessagesScreenStyles.Container}>
      <Header
        style={{
          Container: {
            flex: 3,
          },
        }}
      />
      <ContentContainer
        style={{
          Container: {
            flex: 5,
          },
        }}>
        <ScrollView style={{marginTop: 8}}>
          <SearchBar />
          <Message
            Profile={
              <RoundedImageHolder
                sourceUrl={require('../../assets/jpg/person1.jpg')}
                style={{
                  ImageWrapper: {
                    height: 60,
                    width: 60,
                  },
                }}
              />
            }
            Name="Bell Campbell"
            Time="10:00 am"
            Message="Thank you Doctor"
            MessageCount={2}
          />
          <Message
            Profile={
              <RoundedImageHolder
                sourceUrl={require('../../assets/jpg/person1.jpg')}
                style={{
                  ImageWrapper: {
                    height: 60,
                    width: 60,
                  },
                }}
              />
            }
            Name="Bell Campbell"
            Time="10:00 am"
            Message="Thank you Doctor"
            MessageCount={2}
          />
          <Message
            Profile={
              <RoundedImageHolder
                sourceUrl={require('../../assets/jpg/person1.jpg')}
                style={{
                  ImageWrapper: {
                    height: 60,
                    width: 60,
                  },
                }}
              />
            }
            Name="Bell Campbell"
            Time="10:00 am"
            Message="Thank you Doctor"
            MessageCount={2}
          />
        </ScrollView>
      </ContentContainer>
    </View>
  );
}

const MessagesScreenStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MessagesScreen;
