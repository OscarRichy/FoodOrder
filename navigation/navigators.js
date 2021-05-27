import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Login from "../screens/Login";
import FirstHomeScreen from "../screens/FirstHomeScreen"
import MyProfile from "../screens/MyProfile";
import OngoingOrder from "../screens/OngoingOrder";
import TrackOrder from "../screens/TrackOrder";
import { createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from '../screens/DrawerContent';
import UpdateProfile from "../screens/UpdateProfile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} options={{headerShown: false}}/> 
        <Stack.Screen name = 'OngoingOrder' component={OngoingOrder} options={{headerShown: false}}/> 
        <Stack.Screen name = 'TrackOrder' component={TrackOrder} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export const LoginStackNavigator = () => {

    return(    
        <Stack.Navigator>
            <Stack.Screen name = 'FirstHomeScreen' component={FirstHomeScreen} options={{headerShown: false, gestureEnabled: false}}/> 
            <Stack.Screen name='Login' component={Login} options={{headerShown: false , gestureEnabled: false}}/>
            <Stack.Screen name ='SignUp' component={SignUp} options={{ headerShown: false , gestureEnabled: false}}/>
            <Stack.Screen name='Home' component={ProfileDrawerNavigator} options={{headerShown: false , gestureEnabled: false}}/>
        </Stack.Navigator>
    );
}

export const ProfileDrawerNavigator = () => {
    return(
        <Drawer.Navigator initialRouteName = 'Home' drawerContent={props => <DrawerContent { ... props}/>}>
            <Drawer.Screen name = 'Home' component={MainStackNavigator}/>
            <Drawer.Screen name = 'MyProfile' component={MyProfile}/>
            <Drawer.Screen name = 'UpdateProfile' component={UpdateProfile}/>
        </Drawer.Navigator>
    )
}

export { MainStackNavigator };