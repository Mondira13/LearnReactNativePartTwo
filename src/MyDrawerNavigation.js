import React, { useState } from 'react';
import {
  Image, Text, View, Button
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import ReservationDetails from './ReservationDetails';
import TabViewPagger from './TabViewPagger';


const MyDrawer = createDrawerNavigator();

class MyDrawerNavigation extends React.Component {
  render() {
    return (
        <MyDrawer.Navigator>
          <MyDrawer.Screen name="Home" component={HomeScreen} />
          <MyDrawer.Screen name="ProfileScreen" component={ProfileScreen}   />
          <MyDrawer.Screen name="SettingScreen" component={SettingScreen} />
          <MyDrawer.Screen name="ReservationDetails" component={ReservationDetails} />
          <MyDrawer.Screen name="TabViewPagger" component={TabViewPagger} />
        </MyDrawer.Navigator>
    );
  }
}
export default MyDrawerNavigation;