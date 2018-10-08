import React from 'react';
import { connect } from 'react-redux';
import SearchScreen from '../Screens/SearchScreen'
import serverURL from '../env'

class FetchSearchResults extends React.Component {
  componentDidMount() {
    fetch(serverURL + 'search')
      .then(res => {
        return res.text() 
      }) 
      .then(searchResults => {
        let searchResultsObject = JSON.parse(searchResults);
        this.props.dispatch({
          type: 'LOAD_SEARCH_RESULTS',
          trends: searchResultsObject
        });
      });
  }
  render() {
      return (
        <SearchScreen />
      )
    }
  }

export default connect(state => ({dispatch: state.dispatch}))(FetchSearchResults)
