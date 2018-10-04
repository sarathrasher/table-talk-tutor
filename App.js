import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import store from './store'
import {Provider } from 'react-redux';
import FetchTrends from './Components/FetchTrends'
import Router from './Components/Router'
import TabBar from './Components/TabBar';
import TitleHeader from './Components/Header';
import Routes from './Components/Router';

let App =  () =>
  <View style={{ flex: 1 }}>
    <Routes />
    <TabBar />
  </View>
export default App;
