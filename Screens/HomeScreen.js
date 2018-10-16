import React from 'react';
import { StyleSheet, View } from 'react-native';

import FetchTrends from '../Components/FetchTrends'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FetchTrends />
      </View>
    )
  }
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});