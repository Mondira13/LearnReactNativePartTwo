import React, { useState } from 'react';
import {
  Image,Text,View,Button
} from 'react-native';
import CustomToolbar from '../CustomToolbar'



class MyCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  openForegroundPage =() =>{
    this.props.navigation.navigate('TimerCountdown', { initialTime: 20 })
  }

  openBackgroundPage =() =>{
    this.props.navigation.navigate('TimerCountdownWithBackground', { initialTime: 25 })
  }
  
  render() {
    return (
      <View style={{backgroundColor:'white', flex:1}}>
        <CustomToolbar title="Counter" nav={this.props.navigation} backgroundColor="#FFFFFF" />
        <View style={{flex:1,justifyContent: "center", alignItems: "center" }}>
          <View>
            <Button title="Countdown Timer Only Foreground " onPress={() => this.openForegroundPage()} /> 
          </View>
          <View style={{marginTop:30}} >
            <Button title="Countdown Timer With Background "  onPress={() => this.openBackgroundPage()} /> 
          </View>
        </View>
      </View>
    );
  }
}

export default MyCounter;


