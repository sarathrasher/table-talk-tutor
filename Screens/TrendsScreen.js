import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import TrendRow from '../Components/TrendRow';
import PickerForm from '../Components/PickerForm';
import TempForm from '../Components/TempSearchBar'

let TrendsScreen = (props) =>
  <View style={styles.container}>
    {/* <GoogleSearchBar /> */}
    <TempForm />
    <PickerForm />
      <Text style={styles.header}>Trending Topics</Text>
      {props.trends.map(trend => 
        <TrendRow 
          key={trend.url}
          trend={trend}/>
      )}
 {/* <View style={styles.main}> */}
  </View>
  

let SmartTrendsScreen = connect(state => ({trends: state.trends}))(TrendsScreen)

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

