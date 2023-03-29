import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../../../../screen/Venue/dashBoard/Settings/SettingsScreen';

const SettingsNav = () => {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="venuesettings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNav;
