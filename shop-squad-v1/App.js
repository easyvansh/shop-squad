import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpPage from './src/screens/signUpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/homePage';
import SearchPage from './src/screens/searchPage';
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideMenuScreen from './src/screens/sideMenu';
import ProductDescription from './src/screens/productDescription';
import MySquad from './src/screens/mySquad';
import Notifications from './src/screens/notifications';


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
      <Stack.Screen name="ProductDescription" component={ProductDescription} />
      <Stack.Screen name="MySquad" component={MySquad} />
      <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator> 
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    // <SearchPage/>
    // <SignUpPage/>
    <Drawer.Navigator screenOptions={{headerShown:false,}}
        initialRouteName="SignUpPage"
        drawerContent={(props) => <SideMenuScreen {...props} />}
        >
          <Drawer.Screen name="SignUpPage" component={SignUpPage} />
        <Drawer.Screen name="HomePage" component={StackNavigator} />
      </Drawer.Navigator>
  );
}

  return (
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

