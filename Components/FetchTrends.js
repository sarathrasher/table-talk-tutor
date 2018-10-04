import React from 'react';
import { connect } from 'react-redux';
import SERVER_URL from '../env';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TrendsScreen from '../Screens/TrendsScreen'

class FetchTrends extends React.Component {
  componentDidMount() {
    fetch(SERVER_URL + 'trends')
      .then(res => {
        return res.text() 
      }) 
      .then(trends => {
        let trendsObject = JSON.parse(trends);
        console.log('hi');
        this.props.dispatch({
          type: 'LOAD_TRENDS',
          trends: trendsObject[0].trends.slice(0, 10)
        });
      });
  }
  render() {
      return (
        <TrendsScreen {...this.props}/>
      )
    }
  }

let SmartFetchTrends = connect(state => ({dispatch: state.dispatch}))(FetchTrends)

export default SmartFetchTrends;