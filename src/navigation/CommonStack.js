import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './DoorMan/SignInSignUp/MainStack';
import VenueMainStack from './Venue/SignInStack/VenueMainStack';

const CommonStack = () => {
  const locusStack = createNativeStackNavigator();
  return (
    <locusStack.Navigator screenOptions={{headerShown: false}}>
      <locusStack.Screen name="doorman" component={MainStack} />
      <locusStack.Screen name="venue" component={VenueMainStack} />
    </locusStack.Navigator>
  );
};

export default CommonStack;
