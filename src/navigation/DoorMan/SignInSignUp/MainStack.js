import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../../../screen/DoormanScreen/SignInSignUp/IntroScreen';
import FormScreen from '../../../screen/DoormanScreen/SignInSignUp/FormScreen';
import LoginScreen from '../../../screen/DoormanScreen/SignInSignUp/LoginScreen';
import StepsScreen from '../../../screen/DoormanScreen/SignInSignUp/StepsScreen';
import UploadScreen from '../../../screen/DoormanScreen/SignInSignUp/UploadScreen';
import PaidScreen from '../../../screen/DoormanScreen/SignInSignUp/UploadScreen';
import BackgroundCheckScreen from '../../../screen/DoormanScreen/SignInSignUp/BackgroundCheckScreen';
import FinalSignInScreen from '../../../screen/DoormanScreen/SignInSignUp/LastAccountScreen';

import BottomTab from '../DashboardBar/BottomTab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="intro" component={IntroScreen} />
      <Stack.Screen name="form" component={FormScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="steps" component={StepsScreen} />
      <Stack.Screen name="upload" component={UploadScreen} />
      <Stack.Screen name="paid" component={PaidScreen} />
      <Stack.Screen name="background" component={BackgroundCheckScreen} />
      <Stack.Screen name="FinalScreen" component={FinalSignInScreen} />
      <Stack.Screen name="dashboard" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
