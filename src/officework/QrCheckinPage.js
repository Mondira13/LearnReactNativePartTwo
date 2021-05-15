import React, { useState } from 'react';
import {
    Image, Text, View, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar
} from 'react-native';
import CustomToolbarWithBack from '../CustomToolbarWithBack';
import fontSelector from '../FontSelector'
import QRCode from 'react-native-qrcode-svg';
import languageSelector from '../LanguageSelector'
import strings from '../LanguageSelector';


class QrCheckinPage extends React.Component {
    constructor(props) {
        super(props);
        // let scanImg  = this.props.route.params.imgData;
        // console.warn(scanImg)
        this.state = {
            isVerified: 'notAttempt'
        }
    }

    notAttemptView = () => {
        return (
            <View >
                <Text style={myStyle.notAttemptHeadingStyle} > {strings.notAttemptHeading}  </Text>
                <Text style={myStyle.notAttemptSubHeadingStyle}> {strings.notAttemptSubHeading} </Text>

                <View style={myStyle.cardstyle}>
                    <View style={myStyle.rowView}>
                        <Image source={require('../images/clockicon.png')} style={myStyle.clockIconStyle} />
                        <Text style={myStyle.qrCodeTopFirstTextStyle}> Top Text </Text>
                        <Text style={myStyle.qrCodeTopLastTextStyle}> Content </Text>
                    </View>
                    {this.props.route.params.imgData ?
                        <QRCode
                            logoSize={100}
                            logoBackgroundColor='transparent'
                            value={this.props.route.params.imgData} 
                        />
                        : null
                    }
                    <View style={myStyle.rowView}>
                        <Text style={myStyle.qrCodeBottomFirstTextStyle}> Bottom Text  </Text>
                        <Text style={myStyle.qrCodeBottomLastTextStyle}> Content </Text>
                    </View>
                </View>
            </View>
        );
    }

    verifiedView = () => {
        return (
            <View style={myStyle.verifiedViewStyle}>
                <Image source={require('../images/approve.png')} style={myStyle.approvedIconStyle} />
                <Text style={myStyle.approvedTextStyle}> {strings.approved} </Text>
            </View>
        );

    }

    notVerifiedView = () => {
        return (
            <View>
                <Text style={myStyle.notVerifiedHeadingStyle} > {strings.retryHeading} </Text>
                <Text style={myStyle.notVerifiedSubHeadingStyle}> {strings.retrySubHeading} </Text>

                <View style={myStyle.cardstyle}>
                    <View style={myStyle.rowView}>
                        <Image source={require('../images/clockicon.png')} style={myStyle.notVerifiedClockIconStyle} />
                        <Text style={myStyle.notVeifiedQrCodeTopFirstTextStyle}> Top Text </Text>
                        <Text style={myStyle.notVeifiedQrCodeTopLastTextStyle}> Content </Text>
                    </View>
                    <View style={myStyle.notVerifiedViewContainerStyle}>
                        <QRCode
                            logoSize={100}
                            logoBackgroundColor='transparent'
                            value={this.props.route.params.imgData}
                        />
                    </View>
                    <View style={myStyle.rowView}>
                        <Text style={myStyle.notVeifiedQrCodeBottomFirstTextStyle}> Bottom Text </Text>
                        <Text style={myStyle.notVeifiedQrCodeBottomLastTextStyle}> Content </Text>
                    </View>
                    <TouchableOpacity style={myStyle.retryViewStyle} onPress={() => this.props.navigation.navigate('OpenScanner')}  >
                        <Image source={require('../images/retry.png')} style={myStyle.retryIconStyle} />
                        <Text style={myStyle.retryTextStyle}> {strings.retry} </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    checkSwitch = (param) => {
        switch (param) {
            case 'notAttempt':
                return this.notAttemptView();
                break;

            case 'yes':
                return this.verifiedView();
                break;

            case 'no':
                return this.notVerifiedView();
                break;

            default:
                Alert.alert("No operations done..!!!");
        }
    }

    checkQrScan = () => {
        if (this.state.isVerified == "notAttempt") {
            this.setState({ isVerified: "yes" })
        } else if (this.state.isVerified == "yes") {
            this.setState({ isVerified: "no" })
        }
    }

    render() {
        return (
            <SafeAreaView style={myStyle.viewStyle}>
                <StatusBar backgroundColor='white' barStyle={'dark-content'} />
                <View style={myStyle.viewStyle}>
                    <CustomToolbarWithBack title={strings.qrCheckinPageName} navigation={this.props.navigation} backgroundColor="#FFFFFF" />
                    <View style={myStyle.viewStyle}>
                        <View style={myStyle.topSubViewStyle}>
                            {this.checkSwitch(this.state.isVerified)}
                        </View>
                        <View style={myStyle.bottomSubViewStyle}>
                            <TouchableOpacity style={myStyle.buttonStyle} onPress={() => this.checkQrScan()}>
                                <View style={myStyle.buttonViewStyle}>
                                    <Text style={myStyle.buttonTextStyle}> {strings.confirm} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}


const myStyle = StyleSheet.create({
    viewStyle:{ flex: 1 ,backgroundColor:'#FBFAF7'},
    topSubViewStyle:{flex: 6 },
    bottomSubViewStyle:{ flex: 0.5 },
    rowView: { flexDirection:'row' },
    cardstyle: {
        backgroundColor: '#ffffff',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginStart: 25,
        marginEnd: 25,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        height: 55,
        backgroundColor: '#222722'
    },
    buttonViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
        fontFamily: fontSelector("regular")
    },
    notAttemptHeadingStyle: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: fontSelector("robo_medium"),
        color: '#222722',
        textAlign: 'center',
        marginTop: '40%',
        marginStart: 25,
        marginEnd: 25
    },
    notAttemptSubHeadingStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: '#868484',
        textAlign: 'center',
        marginTop: 10,
        marginStart: 25,
        marginEnd: 25
    },
    qrCodeTopFirstTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: '#868484',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 35,
    },
    qrCodeTopLastTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 35,
    },
    qrCodeBottomFirstTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: '#868484',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 35
    },
    qrCodeBottomLastTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_medium"),
        color: '#000000',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 35
    },
    clockIconStyle:{
        width:17,
        height:17,
        marginTop: 37,
        marginBottom:20,
        marginEnd:4,
        justifyContent:'center'
    },
    notVeifiedQrCodeTopFirstTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: '#868484',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 35,
        opacity: 0.2
    },
    notVeifiedQrCodeTopLastTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 35,
        opacity: 0.2
    },
    notVeifiedQrCodeBottomFirstTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: '#868484',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 35,
        opacity: 0.2
    },
    notVeifiedQrCodeBottomLastTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_medium"),
        color: '#000000',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 35,
        opacity: 0.2
    },
    notVerifiedViewContainerStyle:{
        opacity: 0.1 
    },
    notVerifiedClockIconStyle:{
        width:15,
        height:15,
        marginTop: 37,
        marginBottom:20,
        marginEnd:4,
        opacity: 0.2
    },
    verifiedViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    approvedIconStyle: {
        height: 45,
        width: 45,
        alignSelf: 'center'
    },
    approvedTextStyle: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: fontSelector("robo_medium"),
        color: '#222722',
        textAlign: 'center',
        marginTop: 20
    },
    notVerifiedHeadingStyle: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: fontSelector("robo_medium"),
        color: '#222722',
        textAlign: 'center',
        marginTop: '40%',
        marginStart: 25,
        marginEnd: 25
    },
    notVerifiedSubHeadingStyle: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontSelector("robo_regular"),
        color: '#868484',
        textAlign: 'center',
        marginTop: 10,
        marginStart: 25,
        marginEnd: 25
    },
    retryViewStyle:{
        position: 'absolute' 
    },
    retryIconStyle: {
        height: 40,
        width: 40,
    },
    retryTextStyle: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: fontSelector("robo_regular"),
        color: '#222722',
        marginTop: 8
    }
});
export default QrCheckinPage;
