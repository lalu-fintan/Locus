import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/DoorMan/SignInSignUp/MainStack';
import CommonStack from './src/navigation/CommonStack';

const App = () => {
  return (
    <NavigationContainer>
      <CommonStack />
    </NavigationContainer>
  );
};

export default App;
