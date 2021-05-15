import React, { useState } from 'react';
import {
    Image, Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity
} from 'react-native';
import CustomToolbarWithBack from './CustomToolbarWithBack';
import fontSelector from './FontSelector';


class Notice extends React.Component {
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
        return (
            <View style={{}}>
                <View style={{ backgroundColor: '#BEBFBB', height: 1, marginLeft: 10, marginRight: 10, marginTop: 8 }}></View>
                <View style={{ flexDirection: 'row', width: '100%', marginTop: 13 }}>
                    <Text style={{ flex: 1, marginLeft: 25, marginRight: 5, fontSize: 16, fontWeight: '500', fontFamily: fontSelector("robo_medium") }}> {item.notification_title} </Text>
                    <Text style={{ flex: 1, marginLeft: 5, marginRight: 25, fontSize: 12, fontWeight: '400', fontFamily: fontSelector("inter"), flex: 1, textAlign: 'right' }}> {item.date_time} </Text>
                </View>
                <Text style={{ marginLeft: 25, marginRight: 25, marginTop: 6, marginBottom: 13, fontSize: 14, fontWeight: '300', fontFamily: fontSelector("robo_regular") }}> {item.message} </Text>
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
                <TouchableOpacity style={{height: 50}} onPress={() => this.loadMoreItems() }>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/downarrow.png')} style={{ width: 25, height: 25 }} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomToolbarWithBack title={"Notice"} backgroundColor="#FFFFFF" />
                <View>
                    {this.state.loaderIsVisible ?
                        <View style={myStyle.loadingStyle}>
                            <ActivityIndicator size={50} color="#2484E8" />
                        </View> :
                        <View>
                            <FlatList
                                data={this.state.data}
                                renderItem={this.setRenderItemView}
                                // onEndReached={this.loadMoreItems}
                                ListFooterComponent={this.renderFooter}
                                onEndReachedThreshold={0}
                                keyExtractor={(i, k) => k.toString()}
                                style={{ marginBottom: 50 }}
                            />
                        </View >
                    }
                </View>
            </View>
        );
    }
}

const myStyle = StyleSheet.create({
    loadingStyle: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});
export default Notice;
