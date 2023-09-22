// App.js
import React, {useCallback, useState, useEffect} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import {Auth0Provider} from 'react-native-auth0';


SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }



  return (
    <Auth0Provider domain={"dev-z3pimpy9.us.auth0.com"} clientId={"LS89s0rDcsvg0vXYj4CklULB2AVfNhpM"}>
      <View style={{flex:1}} onLayout={onLayoutRootView}>
          <NavigationContainer>
              <AppNavigator />
          </NavigationContainer>
      </View>
    </Auth0Provider>
  );
};

export default App;
