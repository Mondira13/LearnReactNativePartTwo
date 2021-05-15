import React, { useState } from 'react';
import {
  Image, Text, View, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar
} from 'react-native';
import CustomToolbar from '../CustomToolbar';


class NoticeTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor='white' barStyle={'dark-content'} />
        <View style={{ backgroundColor: 'orange', flex: 1 }}>
          <CustomToolbar title={this.props.heading} nav={this.props.navigation} backgroundColor="#FFFFFF" />
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity style={myStyle.buttonStyle} onPress={() => this.props.navigation.navigate('NoticePage')}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: '400', fontSize: 16 }}> Go to notice </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


const myStyle = StyleSheet.create({
  buttonStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    marginTop: 25,
    height: 55,
    width: 200,
    backgroundColor: '#222722'
  }
});
export default NoticeTab;