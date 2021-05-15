import React, { useState, Component } from 'react';
import {
  Image, Text, View, Platform
} from 'react-native';
// import CustomToolbar from './CustomToolbar';
// import React, { Component } from 'react';
import { RText } from '../../shared';
import BackgroundTimer from 'react-native-background-timer';



export default class TimerCountdownWithBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: props.route.params.initialTime
    }
  }

  componentDidMount() {
    if (Platform.OS == 'ios') {
      BackgroundTimer.start();
    }

    this.interval = BackgroundTimer.setInterval(
      () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      BackgroundTimer.clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    BackgroundTimer.clearInterval(this.interval);
  }



  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'purple' }} > Countdown timer = {this.state.timer} </Text>
      </View>
    )
  }
}
