// import React from 'react';
// import { connect } from 'react-redux';
// import SearchScreen from '../Screens/SearchScreen'
// import serverURL from '../env'

// class FetchSearchResults extends React.Component {
//   componentDidMount() {
//     fetch(serverURL + 'search')
//       .then(res => {
//         return res.text() 
//       }) 
//       .then(searchResults => {
//         let searchResultsObject = JSON.parse(searchResults);
//         console.log(searchResultsObject.items.slice(0, 4))
//         this.props.dispatch({
//           type: 'LOAD_SEARCH_RESULTS',
//           searchResults: searchResultsObject.items.slice(0, 1)
//         });
//       });
//   }
//   render() {
//       return (
//         <SearchScreen />
//       )
//     }
//   }

// export default connect(state => ({dispatch: state.dispatch}))(FetchSearchResults)
