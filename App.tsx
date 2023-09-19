// App.js
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';



const App = () => {



  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;