import React, { useState } from 'react';
import {
  Image,Text,View,StyleSheet,TouchableOpacity
} from 'react-native';
import CustomToolbar from './CustomToolbar';


class TabFirstScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ backgroundColor: 'purple', flex: 1 }}>
        <CustomToolbar title={this.props.heading} nav={this.props.navigation} backgroundColor="#FFFFFF" />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30,color:'white'}} > First Screen </Text>
        </View>
      </View>
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
    width:250,
    backgroundColor: '#222722'
}
});
export default TabFirstScreen;