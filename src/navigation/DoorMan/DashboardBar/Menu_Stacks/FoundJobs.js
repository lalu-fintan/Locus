import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobAvaiableScreen from '../../../../screen/DoormanScreen/FindJob/JobAvaiableScreen';
import ApplyScreen from '../../../../screen/DoormanScreen/FindJob/ApplyScreen';

const FoundJobs = () => {
  const FoundStack = createNativeStackNavigator();
  return (
    <FoundStack.Navigator screenOptions={{headerShown: false}}>
      <FoundStack.Screen name="jobAvilable" component={JobAvaiableScreen} />
      <FoundStack.Screen name="Doorman_applyScreen" component={ApplyScreen} />
    </FoundStack.Navigator>
  );
};

export default FoundJobs;

const styles = StyleSheet.create({});
