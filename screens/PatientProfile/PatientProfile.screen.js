import React from 'react';
import {View, Text} from 'react-native';
import DmzHeader from '../../newComponents/organisms/DmzHeader/DmzHeader';
import CardGrid from '../../newComponents/molecules/CardGrid/CardGrid';
import CardInCol from '../../newComponents/molecules/CardInCol/CardInCol';
import CardInRow from '../../newComponents/molecules/CardInRow/CardInRow';
import CardBar from '../../newComponents/molecules/CardBar/CardBar';
import Section from '../../newComponents/molecules/Section/Section';
import ProfileCol from '../../newComponents/molecules/ProfileCol/ProfileCol';
import Container from '../../newComponents/organisms/Container/Container';
function PatientProfile() {
  return (
    <View>
      <DmzHeader />
      <Container
        style={{
          height: '75%',
          transform: [{translateY: -40}],
          zIndex: 999,
        }}>
        <CardGrid />
        <Section HeaderText="My Appointments">
          <CardInCol>
            <CardBar />
            <CardBar />
            <CardBar />
          </CardInCol>
        </Section>
        <Section HeaderText="My Favourite Doctors">
          <CardInRow
            style={{
              paddingTop: 15,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 8,
              borderTopWidth: 1,
              BorderBottomWidth: 1,
              borderColor: '#F2EBEB',
            }}>
            <ProfileCol
              sourceurl={require('../../assets/jpg/person1.jpg')}
              ProfileName="Scarlet Emini"
              ProfileEmail="scarlet123@gmail.com"
            />
            <ProfileCol
              sourceurl={require('../../assets/jpg/person1.jpg')}
              ProfileName="Scarlet Emini"
              ProfileEmail="scarlet123@gmail.com"
            />
            <ProfileCol
              sourceurl={require('../../assets/jpg/person1.jpg')}
              ProfileName="Scarlet Emini"
              ProfileEmail="scarlet123@gmail.com"
            />
          </CardInRow>
        </Section>
      </Container>
    </View>
  );
}
export default PatientProfile;
