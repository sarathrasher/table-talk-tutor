import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import store from '../store'
import {Provider } from 'react-redux';
import FetchTrends from '../Components/FetchTrends'

let HomeScreen = () =>
  <Provider store={store}>
    <View style={styles.container}>
        <FetchTrends />
    </View>
  </Provider>

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});