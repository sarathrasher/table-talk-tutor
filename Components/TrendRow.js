import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

let TrendRow = (props) =>
  <TouchableOpacity 
  style={styles.container}
  onPress={
    () => {
      console.log(props.trend.name)
      props.dispatch({
        type: 'SELECT_TREND',
        trend: props.trend.name
      })
  }}>
    <Text style={styles.text}>{props.trend.name}</Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18
  }
});

export default connect(state => ({dispatch: state.dispatch}))(TrendRow)