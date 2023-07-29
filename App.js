import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './SignUp';
import LoggedIn from './LoggedIn';
import Login from './Login';
import ResetPassword from './ResetPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="LoggedIn" component={LoggedIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

