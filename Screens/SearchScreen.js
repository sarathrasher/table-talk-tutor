import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ScrollViewRow from '../Components/ScrollViewRow'

let SearchScreen = (props) =>
  <View style={styles.container}>
    <Text style={styles.topHeader}>Twitter</Text>
    <ScrollViewRow 
    type='twitter'
    {...props}
    style={{flex: 1}}
    />
     <Text style={styles.header}>Google</Text>
    <ScrollViewRow 
      style={{flex: 1}}
      type='google' 
      {...props}
    />
     <Text style={styles.header}>Bing</Text>
    <ScrollViewRow 
      style={{flex: 1}}
      type='bing' 
      {...props}
    />
  </View>

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f2f4fc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 200
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  topHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingTop: 10
  }
});