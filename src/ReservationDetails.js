import React, { useState } from 'react';
import {
    Image, Text, View, StyleSheet, SafeAreaView, StatusBar,
     Button,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
import CustomToolbar from './CustomToolbar';
import fontSelector from './FontSelector'



class ReservationDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isApproved: true,
            isRejected: false,
            showTextInput: false
        }
    }

    onChangeRadioButton = (approveValue, rejectValue) => {
        this.setState({ isApproved: approveValue, isRejected: rejectValue })
        if (rejectValue) {
            this.setState({ showTextInput: true })
        }
        if (approveValue) {
            this.setState({ showTextInput: false })
        }
    }


    render() {
        return (
            <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor='white' barStyle={'dark-content'} />
                <View >
                    <CustomToolbar title="Reservation Details" nav={this.props.navigation} backgroundColor="#FFFFFF" />
                    <View style={myStyle.cardstyle}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#222722', marginLeft: 15, marginRight: 15, marginTop: 15,fontFamily: fontSelector("bold") }} > Before approval </Text>
                        <View style={{ backgroundColor: '#F1F0EE', height: 1, marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 22 }}></View>

                        <View style={{ flexDirection: "row"}}>
                            <View style={{ flex: 12, flexDirection: 'column', marginBottom: 20 }}>
                                <Text style={{ fontSize: 12, fontWeight: '300', color: '#222722', marginLeft: 15, fontFamily:fontSelector("regular") }} > Visiting date and time </Text>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: '#222722', marginLeft: 15, marginTop: 6,fontFamily:fontSelector("inter") }} > March 21,2021 </Text>
                                <Text style={{ fontSize: 14, fontWeight: '400', color: '#222722', marginLeft: 15, marginTop: 2 }} > 13:00 </Text>
                            </View>
                            <View style={{ backgroundColor: '#F1F0EE', width: 1, flex: 0.1, marginBottom: 14 }}></View>
                            <View style={{ flex: 12, flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontWeight: '300', color: '#222722', marginLeft: 15, fontFamily:fontSelector("regular")}} > Visiting Purpose </Text>
                                <Text style={{ fontSize: 16, fontWeight: '400', color: '#222722', marginLeft: 15, marginTop: 5,fontFamily:fontSelector("medium") }} > business </Text>
                            </View>
                        </View>
                    </View>

                    <View style={myStyle.secondcardstyle}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#222722', marginLeft: 15, marginRight: 15, marginTop: 15,fontFamily:fontSelector("bold")}} > Contact Information </Text>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 12, flexDirection: 'column', marginBottom: 20 }}>
                                <Text style={{ fontSize: 12, fontWeight: '300', color: '#222722', marginStart: 15,marginEnd:15, fontFamily:fontSelector("regular") }} > Company Name </Text>
                                <Text style={{ fontSize: 16, fontWeight: '400', color: '#222722', marginStart: 15, marginEnd:15,fontFamily:fontSelector("medium") }} > Center Consulting </Text>
                            </View>
                            <View style={{ backgroundColor: '#F1F0EE', width: 1, flex: 0.1 }}></View>
                            <View style={{ flex: 12, flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontWeight: '300', color: '#222722', marginStart: 15,marginEnd:15, fontFamily:fontSelector("regular") }} > Visitor Name </Text>
                                <Text style={{ fontSize: 16, fontWeight: '400', color: '#222722', marginStart: 15,marginEnd:15, fontFamily:fontSelector("medium") }} > Hong gil dong </Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 12, fontWeight: '300', color: '#222722', marginLeft: 15, marginRight: 15, marginTop: 8,fontFamily:fontSelector("regular") }} > Mobile Phone Number </Text>
                        <Text style={{ fontSize: 17, fontWeight: '400', color: '#222722', marginLeft: 15, marginRight: 15,  fontFamily:fontSelector("inter")}} > 010-0000-0000 </Text>

                        <Text style={{ fontSize: 12, fontWeight: '300', color: '#222722', marginLeft: 15, marginRight: 15, marginTop: 20,fontFamily:fontSelector("regular") }} > e-mail </Text>
                        <Text style={{ fontSize: 17, fontWeight: '400', color: '#222722', marginLeft: 15, marginRight: 15,  marginBottom: 30, fontFamily:fontSelector("inter") }} > welcome@centerfield.co.kr </Text>

                    </View>


                    <View style={myStyle.secondcardstyle}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#222722', marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily:fontSelector("bold") }} > Approved Visit </Text>

                        <View style={{ flexDirection: "row", marginTop: 6, marginStart: 15, marginEnd: 15 }}>
                            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this.onChangeRadioButton(true, false)}>
                                <Image source={this.state.isApproved ? require('./images/active.png') : require('./images/inactive.png')} style={{ width: 25, height: 25 }} />
                                <Text style={{ marginStart: 6, fontSize: 14, fontWeight: '400',fontFamily:fontSelector("inter") }}> Approve </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: "row", marginStart: 30 }} onPress={() => this.onChangeRadioButton(false, true)} >
                                <Image source={this.state.isRejected ? require('./images/active.png') : require('./images/inactive.png')} style={{ width: 25, height: 25 }} />
                                <Text style={{ marginStart: 6, fontSize: 14, fontWeight: '400',fontFamily:fontSelector("inter") }}> Reject </Text>
                            </TouchableOpacity>
                        </View>


                        {this.state.showTextInput ?
                            <TextInput placeholder={"Please enter a reason for refusal"}
                                style={myStyle.textBoxStyle}
                            /> : null
                        }

                        <TouchableOpacity style={myStyle.buttonStyle} onPress={() => alert("button click")}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: '400', fontSize: 16,fontFamily:fontSelector("regular") }}> Confirm </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
            </ScrollView>
        );
    }
}

const myStyle = StyleSheet.create({
    cardstyle: {
        // elevation: 2,
        backgroundColor: '#ffffff',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
    secondcardstyle: {
        // elevation: 2,
        backgroundColor: '#ffffff',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginTop: 8
    },
    buttonStyle: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 25,
        marginTop: 25,
        height: 55,
        backgroundColor: '#222722'
    },
    textBoxStyle: {
        fontSize: 14,
        fontWeight: '400',
        borderColor: '#B1B3B2',
        borderWidth: 1,
        padding: 10,
        marginStart: 15,
        marginEnd: 15,
        marginTop: 16,
        color: '#B1B3B2',
        fontFamily:fontSelector("regular")
    }
});
export default ReservationDetails;