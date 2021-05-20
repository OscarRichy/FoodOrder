import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import OngoingOrder from "../screens/OngoingOrder";
import TrackOrder

from "../screens/TrackOrder";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} options={{headerShown: false}}/> 
        <Stack.Screen name = 'OngoingOrder' component={OngoingOrder} options={{headerShown: false}}/> 
        <Stack.Screen name = 'TrackOrder' component={TrackOrder} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };