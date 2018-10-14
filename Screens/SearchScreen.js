import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScrollViewRow from '../Components/ScrollViewRow'

let SearchScreen = (props) =>
  <View style={styles.container}>
    <ScrollViewRow 
    type='twitter'
    {...props}
    style={{flex: 1}}
    />
    <ScrollViewRow 
      style={{flex: 1}}
      type='google' 
      {...props}
    />
    <ScrollViewRow 
      style={{flex: 1}}
      type='bing' 
      {...props}
    />
  </View>

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
    
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 200
  }
});