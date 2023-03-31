import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobPostedScreen from '../../../../screen/Venue/dashBoard/YourJobs/JobPostedScreen';
import CheckIn_CheckOutScreen from '../../../../screen/Venue/dashBoard/YourJobs/CheckIn_CheckOutScreen';
import LeaveFeedbackScreen from '../../../../screen/Venue/dashBoard/YourJobs/LeaveFeedbackScreen';
import ConformJob from '../../../../screen/Venue/dashBoard/YourJobs/ConfirmJobsScreen';
import YourJobsList from '../../../../screen/Venue/dashBoard/YourJobs/YourJobListScreen';
const YourJobsNav = () => {
  const YourJobsStack = createNativeStackNavigator();
  return (
    <YourJobsStack.Navigator screenOptions={{headerShown: false}}>
      <YourJobsStack.Screen name="YourJobsList" component={YourJobsList} />
      <YourJobsStack.Screen name="jobPosted" component={JobPostedScreen} />
      <YourJobsStack.Screen
        name="CheckInOut"
        component={CheckIn_CheckOutScreen}
      />
      <YourJobsStack.Screen
        name="LeaveFeedback"
        component={LeaveFeedbackScreen}
      />
      <YourJobsStack.Screen name="ConformJob" component={ConformJob} />
    </YourJobsStack.Navigator>
  );
};

export default YourJobsNav;
