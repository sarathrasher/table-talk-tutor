import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import ResultRow from '../Components/GoogleResultRow'
import { connect } from 'react-redux';
import ScrollViewRow from '../Components/ScrollViewRow'

let SearchScreen = (props) =>
  <View>
    <ScrollViewRow type='google' {...props}/>
    <ScrollViewRow type='bing' {...props}/>
    <ScrollViewRow type='twitter'{...props}/>
  </View>

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row'
    
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 200
  }
});