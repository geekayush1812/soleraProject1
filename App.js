import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TransactionScreen from './screens/transaction/transaction.screen';
import ProcessingMoneyScreen from './screens/ProcessingMoney/processingMoney.screen';
import TransactionSummaryScreen from './screens/TransactionSummary/transactionSummary.screen';
import FindDoctorScreen from './screens/FindDoctor/findDoctor.screen';
import DoctorDetailsScreen from './screens/DoctorDetailsScreen/doctorDetails.screen';
import AppointmentScreen from './screens/Appointment/appointment.screen';

const AppNavigator = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <AppNavigator.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <AppNavigator.Screen
            name="Transaction"
            component={TransactionScreen}
          />
          <AppNavigator.Screen
            name="ProcessingMoney"
            component={ProcessingMoneyScreen}
          />
          <AppNavigator.Screen
            name="TransactionSummary"
            component={TransactionSummaryScreen}
          />
          <AppNavigator.Screen name="FindDoctor" component={FindDoctorScreen} />
          <AppNavigator.Screen
            name="DoctorDetails"
            component={DoctorDetailsScreen}
          />
          */}
          <AppNavigator.Screen
            name="Appointment"
            component={AppointmentScreen}
          />
        </AppNavigator.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
