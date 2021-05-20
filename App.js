import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import axiosInterceptor from './utils/AxiosInterceptor';
import Home from './screens/Home';
import OngoingOrder from './screens/OngoingOrder';
import TrackOrder from './screens/TrackOrder';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import MyProfile from './screens/MyProfile';
import { MainStackNavigator } from './navigation/StackNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = 'Home' drawerContent={props => <DrawerContent { ... props}/>}>
        <Drawer.Screen name = 'Home' component={MainStackNavigator}/>
        <Drawer.Screen name = 'MyProfile' component={MyProfile}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


