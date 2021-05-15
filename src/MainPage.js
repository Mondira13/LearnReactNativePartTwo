import React, { useState } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';


class MainPage extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
                        <Button title="Drawer With Tab Navigation" onPress={() => this.props.navigation.navigate('MyDrawerNavigation')} color='blue' />
                    </View>
                    <View style={myStyle.buttonstyle}>
                        <Button title="View Pager" onPress={() => this.props.navigation.navigate('MyViewPagger')} color='blue' />
                    </View>
                    <View style={myStyle.buttonstyle}>
                        <Button title="Notice" onPress={() => this.props.navigation.navigate('Notice')} color='blue' />
                    </View>
                    <View style={myStyle.lastbuttonstyle}>
                        <Button title="Qr CheckIn" onPress={() => this.props.navigation.navigate('OpenQrScanner')} color='blue' />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const myStyle = StyleSheet.create({
    buttonstyle: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    lastbuttonstyle: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 50
    }
});


export default MainPage;