import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

let SearchScreen = () =>
  <View style={styles.container}>
    <Text>Search Results!</Text>
  </View>

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});