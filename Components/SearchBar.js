import { Button } from 'react-native-elements'
import React from 'react';
import { Dimensions, Text, View, Alert } from 'react-native'
import { connect } from 'react-redux'
import fetchGoogleResults from '../Actions/fetchGoogleResults';
import fetchBingResults from '../Actions/fetchBingResults';
import fetchTwitterResults from '../Actions/fetchTwitterResults'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }
  fetchSearchResults = () => {
    fetchGoogleResults({...this.props});
    fetchBingResults({...this.props});
    fetchTwitterResults({...this.props});
    this.props.navigation.navigate('Search', {title: 'Search'});
  }

  alert = () => 
    Alert.alert(
      'Alert Title',
      'Please select at least one search item',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  
  error = () =>
    this.props.dispatch({
      type: 'HANDLE_ERROR',
      error: true
    })
  
  render() {
    if (this.props.error) {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>Please enter at least one search term.</Text>
          <Button 
            backgroundColor='#ff3355'
            style={styles.button}
            title='Search' 
            onPress={ () => {
              if (this.props.searchText.searchTextInput === '' && this.props.searchText.selectedSearchTerm === '' && this.props.searchText.selectedTrend === '') {
                this.error();
              } else {
                this.fetchSearchResults();
              }
            }}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.inputContainer}>
          <Button 
            backgroundColor='#ff3355'
            style={styles.button}
            title='Search' 
            onPress={ () => {
              if (this.props.searchText.searchTextInput === '' && this.props.searchText.selectedSearchTerm === '' && this.props.searchText.selectedTrend === '') {
                this.error();
              } else {
                this.fetchSearchResults();
              }
            }}
          />
        </View>
      )
    }
  }
}

export default connect(state => ({error: state.error, searchText: state.searchText}))(SearchForm);

styles = {
  button: {
    backgroundColor: '#ff3355',
    width: (Dimensions.get('window').width * 0.8)
  },
  container: {

  },
  errorText: {
    color: '#ff3355',
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputContainer: {
    // flexDirection: 'row'
  }
}