import React, { useState } from 'react';
import {
    Image, Text, View, Button, StyleSheet
} from 'react-native';
import CustomToolbar from '../CustomToolbar'
import NetInfo from "@react-native-community/netinfo";



export default class NetworkStatusChecking extends React.Component {
    NetInfoSubscribtion = null;

    constructor(props) {
        super(props);
        this.state = {
            connection_status: false,
            connection_type: null,
            connection_net_rechable: false,
            connection_wifi_enable: false,
            connection_details: null
        }
    }

    componentDidMount() {
        this.NetInfoSubscribtion = NetInfo.addEventListener(
            this.handleConnectivityChange
        );
    }

    componentWillUnmount() {
        this.NetInfoSubscribtion && this.NetInfoSubscribtion();
    }

    handleConnectivityChange = (state) => {
        this.setState({
            connection_status: state.isConnected,
            connection_type: state.type,
            connection_net_rechable: state.isInternetReachable,
            connection_wifi_enable: state.isWifiEnabled,
            connection_details: state.details
        })
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <CustomToolbar title="Counter" nav={this.props.navigation} backgroundColor="#FFFFFF" />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={myStyle.textStyle} > Connection Status :
                        {this.state.connection_status ? " Connected" : " Disconnected"}
                    </Text>

                    <Text style={myStyle.textStyle} > Connection Type : {this.state.connection_type} </Text>

                    <Text style={myStyle.textStyle} > Connection Net Reachable :
                        {this.state.connection_status ? " Yes" : " No"}
                    </Text>

                    <Text style={myStyle.textStyle} > Wifi Enable :
                        {this.state.connection_wifi_enable ? " Yes" : " No"}
                    </Text>

                    <Text style={myStyle.textTwoStyle} > Connection Details : {'\n'} 
                        {this.state.connection_type == 'wifi' ? 
                        this.state.connection_details.isConnectionExpensive ? "Connection Expensive = Yes" : "Connection Expensive = No"
                        + '\n'
                        + "ssid = " + this.state.connection_details.ssid
                        + '\n'
                        + "bssid = " + this.state.connection_details.bssid
                        + '\n'
                        + "strength = " + this.state.connection_details.strength
                        + '\n'
                        + "ipAddress = " + this.state.connection_details.ipAddress
                        + '\n'
                        + "subnet = " + this.state.connection_details.subnet
                        + '\n'
                        + "frequency = " + this.state.connection_details.frequency

                        :
                        this.state.connection_type == 'cellular' ? 
                            "isConnectionExpensive = " + this.state.connection_details.isConnectionExpensive
                            + '\n'
                            + "cellularGeneration = " + this.state.connection_details.cellularGeneration
                            + '\n'
                            + "carrier = " + this.state.connection_details.carrier
                        :
                        '--------'
                        }
                    </Text>

                </View>
            </View>
        );
    }
}

const myStyle = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: 'purple',
        marginTop: 8
    },
    textTwoStyle: {
        fontSize: 18,
        color: 'green',
        marginTop: 8
    },
});


