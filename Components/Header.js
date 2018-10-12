import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

let SearchHeader = (props) =>
  <View>
    <Text style={styles.header}>Choose What to Search</Text>
    <Text style={styles.text}>Current Search: </Text>
    <Text style={styles.text}>{props.searchText.selectedTrend} {props.searchText.selectedSearchTerm} {props.searchText.searchTextInput}</Text>
  </View>


export default connect(state => ({selectedTrend: state.selectedTrend, selectedSearchTerm: state.selectedSearchTerm, searchText: state.searchText}))(SearchHeader);

const styles = {
  header: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
}