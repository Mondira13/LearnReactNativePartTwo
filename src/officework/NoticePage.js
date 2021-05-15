import React, { useState } from 'react';
import {
    Image, Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView
} from 'react-native';
import CustomToolbarWithBack from '../CustomToolbarWithBack';
import fontSelector from '../FontSelector';
import strings from '../LanguageSelector';




// function convertUTCDateToLocalDate(date) {
//     var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

//     var offset = date.getTimezoneOffset() / 60;
//     var hours = date.getHours();

//     newDate.setHours(hours - offset);

//     return newDate;   
// }


class NoticePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaderIsVisible: true,
            page: 1,
            totalPage: 0,
            data: []
        }
    }

    componentDidMount() {
        this.callApi()
    }

    async callApi() {
        let apiUrl = 'https://demo1.dvconsulting.org/sock3/api/notification-lists'
        try {
            const formdata = new FormData();
            formdata.append("user_id", 10519);
            formdata.append("api_key", "REIxQzMxR2M5MDg5Zmc4N1JGcGoxdndtRVAxdHk2VU5yNWlTaFFlbjY0YnNrVzJ6S0p4NklhZFhMQWx16047671aa29f0");
            formdata.append("language", "en")
            formdata.append("record_count", 10)
            formdata.append("page", this.state.page)

            let response = await fetch(apiUrl, {
                // method: 'GET',               
                method: 'POST',
                body: formdata,
            })
            let responseJson = await response.json();
            this.setState({
                data: [...this.state.data, ...responseJson.results],
                totalPage: responseJson.total_page,
                loaderIsVisible: false
            })
            // console.warn("data", responseJson.results)
        }
        catch (error) {
            console.error(error);
        }
    }


    setRenderItemView = ({ item }) => {
        // var gmtDateTime = moment.utc(item.date_time, "YYYY-MM-DD HH")
        // var local = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');

        // var utcDate = item.date_time ;  // ISO-8601 formatted date returned from server
        // var localDate = new Date(utcDate);

        // var date = convertUTCDateToLocalDate(item.date_time)
        // var localDate = date.toLocaleString();

        // const now = new Date(item.date_time)
        // const utcTimeOffset = now.getTimezoneOffset() / 60;


        // var date = new Date(Date.parse(item.date_time))
        // var localDate = date.toLocaleString()
        // var date = new Date(Date.parse('06/14/2020 4:41:48 PM UTC'))
        // var localDate = date.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})

        // var date = new Date('Monday, 26 April 2021, 05:42:32');
        // var localDate = date.toLocaleString(); 


        // var d = new Date();
        // var fromatted = d.toLocaleFormat("%d.%m.%Y %H:%M (%a)");  


        // var localDate = convertUTCDateToLocalDate(item.date_time)

        return (
            <View>
                <View style={myStyle.renderItemContainerStyle}>
                    <View style={myStyle.viewContatinerStyle}>
                        <Text style={myStyle.titleTextStyle}> {item.notification_title} </Text>
                        <Text style={myStyle.dateTextStyle}> {item.date_time} </Text>
                    </View>
                    <Text style={myStyle.messageTextStyle}> {item.message} </Text>
                </View>
                <View style={myStyle.borderStyle}></View>
            </View>
        )
    }

    loadMoreItems = () => {
        if (this.state.page < this.state.totalPage) {
            this.setState({
                page: this.state.page + 1,
            }
                , () => {
                    this.callApi()
                })
        }
    }

    renderFooter = () => {
        return (
            <View>
                <TouchableOpacity style={myStyle.flatlisFootViewContainerStyle} onPress={() => this.loadMoreItems()}>
                    <View style={myStyle.flatlisFootViewStyle}>
                        <Image source={require('../images/downarrow.png')} style={myStyle.iconStyle} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={myStyle.safeAreaStyle}>
                <CustomToolbarWithBack title={strings.noticePageName} navigation={this.props.navigation} />
                <View>
                    {this.state.loaderIsVisible ?
                        <View style={myStyle.loadingStyle}>
                            <ActivityIndicator size={50} color="#2484E8" />
                        </View> :
                        <View style={myStyle.mainContainerStyle} >
                            <View style={myStyle.topBorderStyle}></View>
                            <FlatList
                                data={this.state.data}
                                renderItem={this.setRenderItemView}
                                ListFooterComponent={this.renderFooter}
                                onEndReachedThreshold={0}
                                keyExtractor={(i, k) => k.toString()}
                                style={myStyle.flatlistStyle}
                            />
                        </View >
                    }
                </View>
            </SafeAreaView>
        );
    }
}

const myStyle = StyleSheet.create({
    loadingStyle: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    safeAreaStyle:{
        flex: 1 
    },
    mainContainerStyle:{
        backgroundColor: '#FFFFFF' 
    },
    flatlistStyle: {
        marginBottom: 125
    },
    topBorderStyle: {
        backgroundColor: '#222722',
        height: '0.2%',
        marginLeft: 10,
        marginRight: 15,
        marginTop: 30
    },
    flatlisFootViewContainerStyle: {
        height: 50
    },
    flatlisFootViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewContatinerStyle: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 15
    },
    renderItemContainerStyle:{
        marginHorizontal: 25
    },
    titleTextStyle: {
        flex: 1,
        marginRight: 5,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: fontSelector("robo_medium"),
        color: '#222722'
    },
    dateTextStyle: {
        flex: 1,
        marginLeft: 5,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: fontSelector("inter"),
        flex: 1,
        textAlign: 'right',
        color: '#B1B3B2'
    },
    messageTextStyle: {
        marginTop: 6,
        marginBottom: 13,
        fontSize: 14,
        fontWeight: '300',
        fontFamily: fontSelector("robo_regular"),
        color: '#222722'
    },
    borderStyle: {
        backgroundColor: '#BEBFBB',
        height: 1,
        marginLeft: 10,
        marginRight: 15,
        marginTop: 8

    },
    iconStyle: {
        width: 25,
        height: 25
    }
});
export default NoticePage;
