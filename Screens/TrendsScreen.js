import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';

let TrendsScreen = (props) =>
  <View>
    {props.trends.map(trend => 
      <TouchableOpacity 
        key={trend.url}
        style={styles.container}
        onPress={
          () => console.log('You pressed me!')
        }>
        <Text>{trend.name}</Text>
      </TouchableOpacity>
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