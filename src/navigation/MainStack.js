import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screen/IntroScreen';
import FormScreen from '../screen/FormScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="intro" component={IntroScreen} />
      <Stack.Screen name="form" component={FormScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
