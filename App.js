import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackNavigator } from './navigation/StackNavigator';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>
  );
}


