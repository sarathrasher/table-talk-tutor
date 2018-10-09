import React from 'react';
import SearchScreen from '../Screens/SearchScreen'
import { createStackNavigator } from 'react-navigation';
// import SmartFetchTrends from './FetchTrends';
import SmartTrendsScreen from '../Screens/TrendsScreen';

const Routes = createStackNavigator(
  {
    Home: SmartTrendsScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Discover',
      headerStyle: {
        backgroundColor: '#2962ff',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFF',
        zIndex: 1,
        fontSize: 20,
        lineHeight: 23,
        // fontFamily: 'CircularStd-Bold'
      },
      headerTintColor: '#fff',
      animationEnabled: true
    },
  }
)

export default Routes;