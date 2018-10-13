import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import GoogleResultRow from './GoogleResultRow'
import { connect } from 'react-redux';
import BingResultRow from './BingResultRow';
import TwitterResultRow from  './TwitterResultRow'

class ScrollViewRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let resultRow;
    if (this.props.type === 'google') {
      resultRow = this.props.googleResults.map(result => 
        <GoogleResultRow 
          {...this.props}
          key={result.link} 
          result={result} 
          style={styles.card}
        />
      )
    } else if (this.props.type === 'twitter') {
      resultRow = <TwitterResultRow 
        {...this.props}
        style={styles.card}
      />
    } else if (this.props.type === 'bing') {
      resultRow = <BingResultRow 
        {...this.props}
        style={styles.card}
      />
    }
    return (
      <View>
        <ScrollView 
          // contentContainerStyle={{flexGrow:1}} 
          horizontal={true}
          decelerationRate={0}
          snapToInterval={(Dimensions.get('window').width * 0.8) + 24}
          snapToAlignment={"center"}
          >
          {resultRow}
        </ScrollView>
      </View>
    )
  }
}
 


export default connect(state => ({googleResults: state.googleResults, twitterResults: state.twitterResults, bingResults: state.bingResults}))(ScrollViewRow);

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