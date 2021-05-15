import React, { useState } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import CustomToolbar from './CustomToolbar';


class NotificationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor:'purple', flex:1}}>
        <CustomToolbar title={this.props.heading} nav={this.props.navigation} backgroundColor="#FFFFFF" />
        <View style={{flex:1,justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30,color:'white'}} > Notification Screen </Text>
        </View>
      </View>
    );
  }
}

export default NotificationScreen;