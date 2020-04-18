import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Header from '../../components/header/header.component';
import Content from '../../components/Content/Content.component';

function TransactionScreen({navigation}) {
  const dimen = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header />
      <Content onPressSend={() => navigation.navigate('ProcessingMoney')} />
    </View>
  );
}

export default TransactionScreen;
