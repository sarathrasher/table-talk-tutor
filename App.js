import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-naviagtion'

let HomeScreen = () => 
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
  </View>

let ProfileScreen = () => 
  <View style={styles.container}>
    <Text>Profile</Text>
  </View>

let App = createBottomTabNavigator({
  Home: HomeScreen, 
  Profile: ProfileScreen
})

export default App 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
