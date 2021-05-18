import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import axiosInterceptor from './utils/AxiosInterceptor';
import Home from './Components/Home';
import OngoingOrder from './Components/OngoingOrder';
import TrackOrder from './Components/TrackOrder';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = 'Home'>
        <Drawer.Screen name = 'Home' component={Home}/>
        <Drawer.Screen name = 'OngoingOrder' component={OngoingOrder}/>
        <Drawer.Screen name = 'TrackOrder' component={TrackOrder}/>
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} options={{headerShown: false}}/> 
        <Stack.Screen name = 'OngoingOrder' component={OngoingOrder} options={{headerShown: false}}/> 
        <Stack.Screen name = 'TrackOrder' component={TrackOrder} options={{headerShown: false}}/>
      </Stack.Navigator>  */}
    </NavigationContainer>
  );
}


