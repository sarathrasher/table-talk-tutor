import SearchScreen from '../Screens/SearchScreen'
import { createStackNavigator } from 'react-navigation';
import SmartTrendsScreen from '../Screens/TrendsScreen';
import WebViewScreen from '../Screens/WebViewScreen'

const Routes = createStackNavigator(
  {
    Home: {
      screen: SmartTrendsScreen,
      title: 'Discover'
    },
    Search: {
      screen: SearchScreen,
      title: 'Search'
    },
    WebView: {
      screen: WebViewScreen,
      title: 'Explore More'
    }
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