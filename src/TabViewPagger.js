import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabFirstScreen from './TabFirstScreen';
import TabSecondScreen from './TabSecondScreen';
import TabThirdScreen from './TabThirdScreen';
// import NoticePage from './officework/NoticePage'



const initialLayout = { width: Dimensions.get('window').width };

class TabViewPagger extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      index:0,
      routes:[
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' }
      ]
    }
  }

 renderScene = SceneMap({
    first: () => <TabFirstScreen heading="Tab View Pagger" navigation={this.props.navigation} />,
    second: () =>  <TabSecondScreen heading="Tab View Pagger" navigation={this.props.navigation}  />,
    third: () =>  <TabThirdScreen heading="Tab View Pagger" navigation={this.props.navigation} />
  });

  
  render() {
    const{index,routes} = this.state;
    return (
      <TabView
      // tabBarPosition='top'
      tabBarPosition='bottom'
      navigationState={{ index, routes }}
      renderScene={this.renderScene}
      onIndexChange={index => this.setState({index})}
      initialLayout={initialLayout}
    />
    );
  }
}

export default TabViewPagger;