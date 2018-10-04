import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import store from './store'
import {Provider } from 'react-redux';
import FetchTrends from './Components/FetchTrends'
import Router from './Components/Router'

let App =  () =>
  <View style={{ flex: 1 }}>
    <Router />
  </View>
export default App;
