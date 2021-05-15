import React, { useState } from 'react';
import {
    Image, Text, View, Button, TextInput, StyleSheet, TouchableOpacity
} from 'react-native';
import CustomToolbar from '../CustomToolbar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Value } from 'react-native-reanimated';



export default class AsyncStoragePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInputValue:"",
            result:""
        }
    }
 
    saveValue = () => {
        AsyncStorage.setItem("myData", this.state.textInputValue)
        alert("Data Saved In AsyncStorage")
    }

    getValue = () => {
        AsyncStorage.getItem("myData")
            .then((value) => {
                this.setState({result: value})
            })
    }


    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <CustomToolbar title="Async Storage " nav={this.props.navigation} backgroundColor="#FFFFFF" />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
                    <TextInput
                        placeholder="Enter value here"
                        style={myStyle.editTextStyle}
                        autoCapitalize="none"
                        multiline={false}
                        onChangeText={(text) =>  this.setState({textInputValue: text}) }
                    />
                    <TouchableOpacity style={myStyle.buttonStyle} onPress={() => this.saveValue()}>
                        <View style={myStyle.buttonContainer}>
                            <Text style={myStyle.textStyle}> Save value </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={myStyle.buttonStyle} onPress={() => this.getValue()}>
                        <View style={myStyle.buttonContainer}>
                            <Text style={myStyle.textStyle}> Get value </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={myStyle.resultTextStyle}> {this.state.result} </Text>

                </View>
            </View>
        );
    }
}


const myStyle = StyleSheet.create({
    editTextStyle: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#B1B3B2',
        marginHorizontal: 15,
        marginTop: 2,
        width: '100%'
    },
    buttonStyle: {
        width: '100%',
        height: 50,
        marginTop: 30,
        backgroundColor: 'blue',

    },
    textStyle: {
        fontSize: 20,
        color: '#fff',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultTextStyle: {
        fontSize: 30,
        color: 'purple',
        marginVertical:30,
    },
});


