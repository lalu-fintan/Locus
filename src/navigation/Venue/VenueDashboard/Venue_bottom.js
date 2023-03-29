import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostJobs from './Venue_menu/PostJobs';
import BoardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalenderIcon from 'react-native-vector-icons/FontAwesome5';
import PaymentIcon from 'react-native-vector-icons/Ionicons';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import YourJobsNav from './Venue_menu/YourJobsNav';
import PaymentNav from './Venue_menu/PaymentsNav';
import SettingsNav from './Venue_menu/SettingsNav';

const Venue_bottom = () => {
  const VenueBottomStack = createBottomTabNavigator();
  return (
    <VenueBottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          paddingBottom: 10,
          height: 70,
          paddingHorizontal: 20,
        },
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#A9A0FF',
      }}>
      <VenueBottomStack.Screen
        name="venue_post"
        component={PostJobs}
        options={{
          tabBarLabel: 'Found job',
          tabBarLabelStyle: {fontSize: 10, fontFamily: 'arial'},
          tabBarIcon: ({color}) => (
            <BoardIcon name="bulletin-board" size={31} color={color} />
          ),
        }}
      />
      <VenueBottomStack.Screen
        name="Venue_yourJobs"
        component={YourJobsNav}
        options={{
          tabBarLabel: 'Your Jobs',
          tabBarLabelStyle: {fontSize: 10, fontFamily: 'arial'},
          tabBarIcon: ({color}) => (
            <CalenderIcon name="calendar-alt" size={27} color={color} />
          ),
        }}
      />
      <VenueBottomStack.Screen
        name="Venue_payments"
        component={PaymentNav}
        options={{
          tabBarLabel: 'Payments',
          tabBarLabelStyle: {fontSize: 10, fontFamily: 'arial'},
          tabBarIcon: ({color}) => (
            <PaymentIcon name="ios-card-sharp" size={27} color={color} />
          ),
        }}
      />
      <VenueBottomStack.Screen
        name="Venue_Settings"
        component={SettingsNav}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {fontSize: 10, fontFamily: 'arial'},
          tabBarIcon: ({color}) => (
            <SettingsIcon name="ios-settings-sharp" size={27} color={color} />
          ),
        }}
      />
    </VenueBottomStack.Navigator>
  );
};

export default Venue_bottom;
