import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpPage from './src/screens/signUpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/homePage';
import SearchPage from './src/screens/searchPage';
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideMenuScreen from './src/screens/sideMenu';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomePage" screenOptions={{headerShown:false,}}>
      {/* <Stack.Screen name="SignUpPage" component={SignUpPage} /> */}
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      </Stack.Navigator> 
  );
}
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    // <SearchPage/>
    <Drawer.Navigator screenOptions={{headerShown:false,}}
        initialRouteName="SignUpPage"
        drawerContent={(props) => <SideMenuScreen {...props} />}
        >
          <Drawer.Screen name="SignUpPage" component={SignUpPage} />
        <Drawer.Screen name="HomePage" component={StackNavigator} />
        {/* <Drawer.Screen name="HomeStack" component={StackNavigator} /> */}
      </Drawer.Navigator>
  );
}

  return (
    // <SearchPage/>
    <NavigationContainer>
   
   <DrawerNavigator />
  </NavigationContainer>
  );
}

styles = StyleSheet.create({
  navbar: {
    backgroundColor:"transparent",
  }
})

