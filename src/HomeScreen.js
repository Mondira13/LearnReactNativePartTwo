import React, { useState } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import CustomToolbar from './CustomToolbar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';



const Tab = createBottomTabNavigator();


class HomeScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'orange' }}
        shifting={true}
      >

        <Tab.Screen
          name="Chat"
          // component={ChatScreen}
          children={()=><ChatScreen heading="Home" navigation={this.props.navigation} />}
          options={{
            tabBarLabel: ({ text }) => (
              <Text style={{ fontSize: 13, fontStyle: 'italic' }}> Chat </Text>
            ),
            tabBarIcon: ({ tontColor }) => (
              <Image
                source={require('./images/chaticon.png')}
                resizeMode='contain'
                style={{ width: 20, height: 20 }}
              />
            ),
            tabBarBadge: 3
          }} />

        <Tab.Screen
          name="Notification"
          // component={NotificationScreen}
          children={()=><NotificationScreen heading="Home" navigation={this.props.navigation} />}
          options={{
            tabBarLabel: ({ text }) => (
              <Text style={{ fontSize: 13, fontStyle: 'italic' }}> Notification </Text>
            ),
            tabBarIcon: ({ tontColor }) => (
              <Image
                source={require('./images/notification.png')}
                resizeMode='contain'
                style={{ width: 20, height: 20 }}
              />
            ),
            tabBarBadge: 7
          }} />

      </Tab.Navigator>
    );
  }
}

export default HomeScreen;
