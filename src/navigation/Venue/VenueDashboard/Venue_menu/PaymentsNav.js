import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentScreen from '../../../../screen/Venue/dashBoard/Payments/PaymentScreen';
import InvoiceScreen from '../../../../screen/Venue/dashBoard/Payments/InvoiceScreen';

const PaymentsNav = () => {
  const PaymentStack = createNativeStackNavigator();
  return (
    <PaymentStack.Navigator screenOptions={{headerShown: false}}>
      <PaymentStack.Screen name="paymentList" component={PaymentScreen} />
      <PaymentStack.Screen name="Invoice" component={InvoiceScreen} />
    </PaymentStack.Navigator>
  );
};

export default PaymentsNav;
