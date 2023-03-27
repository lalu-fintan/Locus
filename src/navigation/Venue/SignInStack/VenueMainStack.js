import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TheVenue from '../../../screen/Venue/SignInSignUp/TheVenue';

export default function VenueMainStack() {
  const VenueStack = createNativeStackNavigator();
  return (
    <VenueStack.Navigator screenOptions={{headerShow: false}}>
      <VenueStack.Screen
        name="theVenue"
        component={TheVenue}
        options={{headerShown: false}}
      />
    </VenueStack.Navigator>
  );
}
