import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CheckIn_OutScreen from '../../../../screen/DoormanScreen/YourJobs/CheckIn_OutScreen';
import YourJobsScreen from '../../../../screen/DoormanScreen/YourJobs/YourJobsScreen';
import YourJobScreen from '../../../../screen/DoormanScreen/YourJobs/YourJobScreen';
import YourJobs_JobDescripionScreen from '../../../../screen/DoormanScreen/YourJobs/YourJobs_JobDescripionScreen';
import {Text} from 'react-native';

const YourJobs = () => {
  const YourJobsStack = createNativeStackNavigator();
  return (
    <>
      <YourJobsStack.Navigator screenOptions={{headerShown: false}}>
        <YourJobsStack.Screen name="avilableList" component={YourJobsScreen} />
        <YourJobsStack.Screen name="jobList" component={YourJobScreen} />
        <YourJobsStack.Screen
          name="jobdescription"
          component={YourJobs_JobDescripionScreen}
        />
        <YourJobsStack.Screen name="checkIn" component={CheckIn_OutScreen} />
      </YourJobsStack.Navigator>
      {/* <YourJobsStack.Navigator screenOptions={{headerShown: false}}>
        <YourJobsStack.Screen name="jobAvilable" component={YourJobsScreen} />
        <YourJobsStack.Screen
          name="Doorman_applyScreen"
          component={YourJobScreen}
        />
      </YourJobsStack.Navigator> */}
    </>
  );
};

export default YourJobs;
