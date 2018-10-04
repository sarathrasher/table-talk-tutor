import SmartTrendsScreen from "../Screens/TrendsScreen";
import { createBottomTabNavigator } from 'react-navigation';
import SearchScreen from '../Screens/SearchScreen'
import TrendsScreen from '../Screens/TrendsScreen'
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';


const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const TabBar = createBottomTabNavigator(
  {
  "Trending Topics": HomeScreen,
  Search: SearchScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#333',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#f2f2f2f2'
      }
    }
  }
);

export default TabBar;
