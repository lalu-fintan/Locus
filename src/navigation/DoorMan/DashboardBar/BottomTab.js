import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PaymentsScreen from '../../../screen/DoormanScreen/Payment/PaymentsScreen';
import SettingsScreen from '../../../screen/DoormanScreen/Settings/SettingsScreen';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import CalenderIcon from 'react-native-vector-icons/FontAwesome5';
import PaymentIcon from 'react-native-vector-icons/Ionicons';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import YourJobs from './Menu_Stacks/YourJobs';
import FoundJobs from './Menu_Stacks/FoundJobs';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="found"
        component={FoundJobs}
        options={{
          tabBarLabel: 'Found job',
          tabBarLabelStyle: {fontSize: 10, fontFamily: 'arial'},
          tabBarIcon: ({color, size}) => (
            <SearchIcon name="search" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="yourjobs"
        component={YourJobs}
        options={{
          tabBarLabel: 'Your jobs',
          tabBarIcon: ({color}) => (
            <CalenderIcon name="calendar-alt" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="payments"
        component={PaymentsScreen}
        options={{
          tabBarLabel: 'Payments',
          tabBarIcon: ({color}) => (
            <PaymentIcon name="ios-card-sharp" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {color: '#000', fontSize: 10},
          tabBarIconStyle: {justifyContent: 'center', alignSelf: 'center'},
          tabBarIcon: ({color}) => (
            <SettingsIcon name="ios-settings-sharp" size={27} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
