import React from 'react';
import { View } from 'react-native';
import SearchScreen from '../Screens/SearchScreen'
import TrendsScreen from '../Screens/TrendsScreen'
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    // Trends: {
    //   screen: TrendsScreen
    // },
    // Search: {
    //   search: SearchScreen
    // }
  },
  {
    initialRouteName: 'Home',
    navigationOption: {
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTitleStyle: {
        fontWEight: 'bold',
        color: '#fff',
        zIndex: 1,
        fontSize: 18,
        lineHeight: 23,
        fontFamily: 'CircularStd-Bold'
      },
      headerTintColor: '#fff',
      animationEnabled: true
    },
  }
)

export default Routes;