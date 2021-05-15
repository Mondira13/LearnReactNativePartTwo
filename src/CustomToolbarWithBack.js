import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ceil } from 'react-native-reanimated';
import fontSelector from './FontSelector';


class CustomToolbarWithBack extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={myStyles.navBar}>
                <View style={myStyles.rowitem}>
                    <View style={myStyles.backButtonViewStyle} >
                        <TouchableOpacity style={myStyles.backButtonStyle} onPress={() => { { this.props.navigation.goBack() } }}    >
                            <Image source={require('./images/backicon.png')} style={myStyles.iconStyle} />
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.appTitleViewStyle}>
                        <View style={{}} >
                            <Text style={myStyles.appTitleStyle}> {this.props.title} </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const myStyles = StyleSheet.create({
    navBar: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: 'white'
    },
    rowitem: {
        flexDirection: 'row', flex: 1
    },
    appTitleViewStyle: {
        flex: 7 ,
        backgroundColor:'white'
    },
    appTitleStyle: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: fontSelector("medium"),
        color: '#222722',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: -45
    },
    iconStyle: {
        width: 15,
        height: 15
    },
    backButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButtonViewStyle: {
        flex: 1,
        backgroundColor:'white'
    },
});
export default CustomToolbarWithBack;