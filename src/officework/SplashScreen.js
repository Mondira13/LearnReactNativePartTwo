import React, { useState } from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import LottieView from 'lottie-react-native';



export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


                    <LottieView
                        source={require('../myassets/loading.json')}
                        autoPlay
                        loop
                        speed ={0.5}
                    />


                </View>
            </View>
        );
    }
}


