import React, { useState } from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';





// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

class MyTabNavigation extends React.Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="HomeScreen"
                activeColor="#e91e63"
                barStyle={{ backgroundColor: 'orange' }}
                shifting={true}
            // tabBarOptions={{
            //     activeTintColor: 'red',
            //     inactiveTintColor: 'gray',
            // }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: ({ text }) => (
                            <Text style={{ fontSize: 13, fontStyle: 'italic' }}> Home </Text>
                        ),
                        tabBarIcon: ({ tontColor }) => (
                            <Image
                                source={require('./images/homeicon.png')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                        )
                    }} />

                <Tab.Screen
                    name="Chat"
                    component={ChatScreen}
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
                    component={NotificationScreen}
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

export default MyTabNavigation;
