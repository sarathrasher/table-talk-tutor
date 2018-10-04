import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchTrends from '../Components/FetchTrends'

let HomeScreen = () =>
  <View style={styles.container}>
    <FetchTrends />
  </View>

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});