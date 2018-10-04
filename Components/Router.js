import React from 'react';
import { View } from 'react-native';
import SearchScreen from '../Screens/SearchScreen'
import TrendsScreen from '../Screens/TrendsScreen'
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import SmartFetchTrends from './FetchTrends';

const Routes = createStackNavigator(
  {
    Home: {
      screen: SmartFetchTrends
    },
    Search: {
      screen: SearchScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Discover',
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
        zIndex: 1,
        fontSize: 18,
        lineHeight: 23,
        // fontFamily: 'CircularStd-Bold'
      },
      headerTintColor: '#fff',
      animationEnabled: true
    },
  }
)

export default Routes;