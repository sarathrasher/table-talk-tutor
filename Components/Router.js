import SearchScreen from '../Screens/SearchScreen'
import { createStackNavigator } from 'react-navigation';
import SmartTrendsScreen from '../Screens/TrendsScreen';
import WebViewScreen from '../Screens/WebViewScreen'
import LoadingHomeScreen from './LoadingHomeScreen';

// class Routes extends React.Component {

const Routes = createStackNavigator(
  {
    // Home: {
    //   screen: LoadingHomeScreen,
    //   title: 'Table Talk Tutor'
    // },

    Discover: {
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
);

export default Routes;