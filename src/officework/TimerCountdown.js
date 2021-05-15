import React, { useState, Component } from 'react';
import {
  Image, Text, View, Platform
} from 'react-native';
// import CustomToolbar from './CustomToolbar';
// import React, { Component } from 'react';
import { RText } from '../../shared';
import BackgroundTimer from 'react-native-background-timer';



class TimerCountdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: props.route.params.initialTime
    }
  }

  componentDidMount() {
      this.interval = setInterval(
        () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
        1000
      );
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
      // this.props.onTimerElapsed()
    }
  } 

  componentWillUnmount() {
    clearInterval(this.interval);
    // this.props.onTimerElapsed()
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={this.props.style}> Countdown timer = {this.state.timer} </Text> */}
        <Text style={{ fontSize: 30, color: 'purple' }} > Countdown timer = {this.state.timer} </Text>
      </View>
    )
  }
}

export default TimerCountdown;
