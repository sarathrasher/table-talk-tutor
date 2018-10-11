import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import TrendRow from '../Components/TrendRow';
import PickerForm from '../Components/PickerForm';
import TempForm from '../Components/SearchBar'
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
        <TempForm {...this.props}/>
        <PickerForm />
          <Text style={styles.header}>Trending Topics</Text>
          {this.props.trends.map(trend => 
            <TrendRow 
              key={trend.url}
              trend={trend}/>
          )}
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
    justifyContent: 'center',
    padding: 15
  },
  main: {
    padding: 5
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

