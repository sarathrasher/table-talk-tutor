import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import TrendRow from '../Components/TrendRow';
import PickerForm from '../Components/PickerForm';

let TrendsScreen = (props) =>
  <View style={styles.container}>
    <PickerForm />
    {props.trends.map(trend => 
      <TrendRow 
        key={trend.url}
        trend={trend}/>
    )}
  </View>
  

let SmartTrendsScreen = connect(state => ({trends: state.trends}))(TrendsScreen)

export default SmartTrendsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

