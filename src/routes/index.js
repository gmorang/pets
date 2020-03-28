import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppRoutes from './app-routes';

import SignUp from '../components/auth/sign-up';
import Login from '../components/auth/login';

const Stack = createStackNavigator();

export default function Routes({ signedIn = true }) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={signedIn ? "App" : "SignIn"}>
        {signedIn ? <Stack.Screen name="App" component={AppRoutes} />
          : (
            <>
              <Stack.Screen name="SignIn" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
