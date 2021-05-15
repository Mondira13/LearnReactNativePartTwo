import React, { useState } from 'react';
import {
  Image, Text, View, Button
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabViewPage from './TabViewPage';
import MyCounter from './MyCounter';
import AsyncStoragePage from './AsyncStoragePage';
import NetworkStatusChecking from './NetworkStatusChecking';
import SplashScreen from './SplashScreen';


const MyDrawer = createDrawerNavigator();

class DrawerPage extends React.Component {
  render() {
    return ( 
        <MyDrawer.Navigator>
          <MyDrawer.Screen name="Home" component={TabViewPage} />
          <MyDrawer.Screen name="MyCounter" component={MyCounter} />
          <MyDrawer.Screen name="AsyncStoragePage" component={AsyncStoragePage} />
          <MyDrawer.Screen name="NetworkStatusChecking" component={NetworkStatusChecking} />
          <MyDrawer.Screen name="SplashScreen" component={SplashScreen} />
        </MyDrawer.Navigator>
    );
  }
}
export default DrawerPage;