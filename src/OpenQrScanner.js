import React, { useState } from 'react';
import {
    Image, Text, View, TouchableOpacity, StyleSheet, Linking
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import QrCheckIn from './QrCheckIn'




class OpenQrScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qrUrl: ""
        }
    }

    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );

        // this.setState({ qrUrl: e.data })

        //  this.setMyData(e.data)
        // this.setMyData(e.data)
        
    };

    setMyData = (data) =>{
        // console.warn("data",data)
        this.setState({ qrUrl: data })
        this.props.navigation.navigate('QrCheckIn',{imgData: this.state.qrUrl})
    }

    render() {
        return (
            <View style={{backgroundColor:'purple',height:'100%'}}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    reactivate={true}
                    reactivateTimeout={10}
                    showMarker={true}
                    markerStyle={{ borderColor: "#FFF", borderRadius: 10,borderStyle:'dashed' }}
                    permissionDialogMessage="Need Permission To Access Camera"
                />

                {/* {this.state.qrUrl ?
                    <QRCode
                        logoSize={30}
                        logoBackgroundColor='transparent'
                        value={this.state.qrUrl}
                    />
                    : null
                } */}

            </View>
        );
    }
}
export default OpenQrScanner;