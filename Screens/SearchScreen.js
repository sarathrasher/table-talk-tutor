import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ResultRow from '../Components/ResultRow'
import { connect } from 'react-redux';

let SearchScreen = (props) =>
  <View>
    <ScrollView contentContainerStyle={{flexGrow:1}} style={styles.container}>
      {props.searchResults.map(result => 
        <ResultRow key={result.link} result={result} />
        )}
    </ScrollView>
  </View>


export default connect(state => ({searchResults: state.searchResults}))(SearchScreen);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});