import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CommonStack from './src/navigation/CommonStack';
import {AuthProvider} from './src/context/AuthContext';
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <CommonStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
