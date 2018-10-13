import { Button } from 'react-native-elements'
import React from 'react';
import { View, } from 'react-native'
import { connect } from 'react-redux'
import fetchGoogleResults from '../Actions/fetchGoogleResults';
import fetchBingResults from '../Actions/fetchBingResults';
import fetchTwitterResults from '../Actions/fetchTwitterResults'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
    }
  }
  fetchSearchResults = () => {
    fetchGoogleResults({...this.props});
    fetchBingResults({...this.props});
    fetchTwitterResults({...this.props});
    this.props.navigation.navigate('Search', {title: 'Search'});
  }

  render() {
      return (
        <View style={styles.inputContainer}>
          <Button 
            backgroundColor='#ff3355'
            style={styles.button}
            title='Search' 
            onPress={ () =>
              this.fetchSearchResults()
            }
          />
        </View>
      )
    }
}

export default connect(state => ({searchText: state.searchText}))(SearchForm);

styles = {
  button: {
    backgroundColor: '#ff3355'
  },
  container: {

  },
  inputContainer: {
    // flexDirection: 'row'
  }
}