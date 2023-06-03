import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpPage from './src/screens/signUpPage';
import HomePage from './src/screens/homePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <HomePage/>
  //   <NavigationContainer style = {styles.navbar}>
  //   <Stack.Navigator
  //   screenOptions={{headerShown:false, gestureEnabled: true,}}>
  //     <Stack.Screen name="SignUpPage" component={SignUpPage} />
  //     {/* Add other screens */}
  //     <Stack.Screen name="HomePage" component={HomePage} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  );
}

styles = StyleSheet.create({
  navbar: {
    backgroundColor:"transparent",
  }
})

