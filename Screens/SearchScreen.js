import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ResultRow from '../Components/ResultRow'
import { connect } from 'react-redux';

let SearchScreen = (props) =>
  <View>
    <ScrollView 
      // contentContainerStyle={{flexGrow:1}} 
      horizontal={true}
      decelerationRate={0}
      snapToInterval={350 + 24}
      snapToAlignment={"center"}
      >
      {props.searchResults.map(result => 
        <ResultRow 
          key={result.link} 
          result={result} 
          style={styles.card}
          />
        )}
    </ScrollView>
  </View>


export default connect(state => ({searchResults: state.searchResults}))(SearchScreen);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row'
    
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 200
  }
});