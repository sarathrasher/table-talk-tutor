import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import ResultRow from '../Components/ResultRow'
import { connect } from 'react-redux';
import ScrollViewRow from '../Components/ScrollViewRow'

let SearchScreen = (props) =>
  <ScrollViewRow />


export default connect(state => ({searchResults: state.searchResults}))(SearchScreen);

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