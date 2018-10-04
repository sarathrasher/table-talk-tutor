import SmartTrendsScreen from "../Screens/TrendsScreen";
import { createBottomTabNavigator } from 'react-navigation';


const TabBar = createBottomTabNavigator(
  {
  "Trending Topics": HomeScreen,
  Search: SearchScreen,
  },
  // navigationOptions: ({ navigation }) => {

  // }
);

export default TabBar;
