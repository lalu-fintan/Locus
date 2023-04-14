import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CommonStack from './src/navigation/CommonStack';

const App = () => {
  return (
    <NavigationContainer>
      <CommonStack />
    </NavigationContainer>
  );
};

export default App;
