import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

let TrendRow = (props) =>
  <TouchableOpacity 
  style={styles.container}
  onPress={
    () => console.log(props.trend.name)
  }>
    <Text>{props.trend.name}</Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrendRow;