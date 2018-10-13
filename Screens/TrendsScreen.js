import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View} from 'react-native';
import Header from '../Components/Header';
import WheelPicker from '../Components/WheelPicker';
import SearchBar from '../Components/SearchBar'
import SERVER_URL from '../env'

class TrendsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch(SERVER_URL + 'trends')
      .then(res => {
        return res.text() 
      }) 
      .then(trends => {
        let trendsObject = JSON.parse(trends);
        this.props.dispatch({
          type: 'LOAD_TRENDS',
          trends: trendsObject[0].trends.slice(0, 10)
        });
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <WheelPicker />
        <SearchBar {...this.props}/>
      </View>
    )
  }
}
  
let SmartTrendsScreen = connect(state => ({dispatch: state.dispatch, trends: state.trends}))(TrendsScreen)

export default SmartTrendsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4fc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingTop: 40
  },
  main: {
    padding: 5
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

