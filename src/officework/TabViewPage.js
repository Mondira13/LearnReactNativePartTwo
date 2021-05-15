import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Text,
    View
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ReservationDetailsTab from './ReservationDetailsTab';
import NoticeTab from './NoticeTab';
import QrScanTab from './QrScanTab';



const initialLayout = { width: Dimensions.get('window').width };

class TabViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'reservation', title: 'Reservation' },
                { key: 'notice', title: 'Notice' },
                { key: 'qr', title: 'QR Scanner' },
            ]
        }
    }

    renderScene = SceneMap({
        reservation: () => <ReservationDetailsTab heading="Reservation Details" navigation={this.props.navigation} />,
        notice: () => <NoticeTab heading="Notice" navigation={this.props.navigation} />,
        qr: () => <QrScanTab heading="Qr Scanner" navigation={this.props.navigation} />, 
    });


    render() {
        const { index, routes } = this.state;
        return (
            <TabView
                // tabBarPosition='top'
                tabBarPosition='bottom'
                navigationState={{ index, routes }}
                renderScene={this.renderScene}
                onIndexChange={index => this.setState({ index })}
                initialLayout={initialLayout}
            />
        );
    }
}

export default TabViewPage;