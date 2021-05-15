import React, { Fragment, useState } from 'react';
import {
    Image, Text, View, TouchableOpacity, StyleSheet, Linking
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';



class OpenScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qrUrl: ""
        }
    }

    onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
        this.setMyData(e.data)
    };

    _topContent(){
        return(
          <View style={{height:0}}></View>
        )
      }
      _bottomContent(){
        return(
          <View style={{height:0}}></View>
        )
      }

    setMyData = (data) => {
        this.setState({ qrUrl: data })
        this.props.navigation.navigate('QrCheckinPage', { "imgData": data })
    }

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                flashMode={RNCamera.Constants.FlashMode.auto}
                reactivate={true}
                reactivateTimeout={10}
                showMarker={true}
                markerStyle={{ borderColor: "#FFF", borderRadius: 10, borderStyle: 'dashed' }}
                permissionDialogMessage="Need Permission To Access Camera"
                cameraStyle={{height:'100%'}}
            />
        );
    }
}
export default OpenScanner;