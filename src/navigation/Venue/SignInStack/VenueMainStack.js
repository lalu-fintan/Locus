import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TheVenue from '../../../screen/Venue/SignInSignUp/TheVenue';
import CreateOnAccount from '../../../screen/Venue/SignInSignUp/CreateOnAccount';
import Address from '../../../screen/Venue/SignInSignUp/AddressScreen';
import Brand from '../../../screen/Venue/SignInSignUp/BrandScreen';
import Venue_bottom from '../VenueDashboard/Venue_bottom';

export default function VenueMainStack() {
  const VenueStack = createNativeStackNavigator();
  return (
    <VenueStack.Navigator screenOptions={{headerShow: false}}>
      <VenueStack.Screen
        name="CreateAccount"
        component={CreateOnAccount}
        options={{headerShown: false}}
      />
      <VenueStack.Screen
        name="TheVenue"
        component={TheVenue}
        options={{headerShown: false}}
      />
      <VenueStack.Screen
        name="Address"
        component={Address}
        options={{headerShown: false}}
      />
      <VenueStack.Screen
        name="Brand"
        component={Brand}
        options={{headerShown: false}}
      />
      <VenueStack.Screen
        name="VenueBottom"
        component={Venue_bottom}
        options={{headerShown: false}}
      />
    </VenueStack.Navigator>
  );
}
