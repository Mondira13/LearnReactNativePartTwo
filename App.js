import React, {Component} from 'react';  
import {Text, View} from 'react-native';  
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { screensEnabled } from 'react-native-screens';
import MainPage from './src/MainPage'
// import MyDrawerNavigation from './src/MyDrawerNavigation'
// import MyViewPagger from './src/MyViewPagger'
// import Notice from './src/Notice'
// import QrCheckIn from './src/QrCheckIn'
// import OpenQrScanner from './src/OpenQrScanner'
import DrawerPage from './src/officework/DrawerPage';
import ReservationDetailsPage from './src/officework/ReservationDetailsPage';
import NoticePage from './src/officework/NoticePage';
import OpenScanner from './src/officework/OpenScanner';
import QrCheckinPage from './src/officework/QrCheckinPage';
import TimerCountdown from './src/officework/TimerCountdown';
import TimerCountdownWithBackground from './src/officework/TimerCountdownWithBackground';

  
 
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerPage" component={DrawerPage} options={{ headerShown: false }} /> 
        <Stack.Screen name="ReservationDetailsPage" component={ReservationDetailsPage} options={{ headerShown: false }} /> 
        <Stack.Screen name="NoticePage" component={NoticePage} options={{ headerShown: false }} /> 
        <Stack.Screen name="OpenScanner" component={OpenScanner} options={{ headerShown: false }} /> 
        <Stack.Screen name="QrCheckinPage" component={QrCheckinPage} options={{ headerShown: false  }} /> 
        <Stack.Screen name="TimerCountdown" component={TimerCountdown} options={{ title: "Countdown Timer" }} /> 
        <Stack.Screen name="TimerCountdownWithBackground" component={TimerCountdownWithBackground} options={{ title: "Countdown Timer"  }} /> 


   


        {/* <Stack.Screen name="MainPage" component={MainPage} options={{ title: "Main Page"}} />
        <Stack.Screen name="MyDrawerNavigation" component={MyDrawerNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="MyViewPagger" component={MyViewPagger} options={{ title: "View Pagger" }} />
        <Stack.Screen name="Notice" component={Notice} options={{ headerShown: false  }} />
        <Stack.Screen name="OpenQrScanner" component={OpenQrScanner} options={{ headerShown: false  }} />
        <Stack.Screen name="QrCheckIn" component={QrCheckIn} options={{ headerShown: false  }} /> */}
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStackNavigator;