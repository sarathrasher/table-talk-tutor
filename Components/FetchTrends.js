import React from 'react';
import { connect } from 'react-redux';
import SERVER_URL from '../env';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TrendsScreen from '../Screens/TrendsScreen'

  class FetchTrends extends React.Component {
    componentWillMount() {
      fetch(SERVER_URL + 'trends')
        .then(res => {
          return res.text() 
        }) 
        .then(trends => {
          let trendsObject = JSON.parse(trends);
          this.props.dispatch({
            type: 'LOAD_TRENDS',
            trends: trendsObject[0].trends
          });
        });
    }
    render() {
      if (this.props.trends.length < 0) {
        return <Text>Loading...</Text>
      }
      else {
        return (
          <TrendsScreen />
        )

      }
    }
  }

let SmartFetchTrends = connect(state => ({trends: state.trends}))(FetchTrends)

export default SmartFetchTrends;