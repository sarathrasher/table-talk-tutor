import SERVER_URL from '../env'

let fetchGoogleResults = (props) => {
  fetch(`${SERVER_URL}google/${props.searchText.selectedTrend} ${props.searchText.selectedSearchTerm} ${props.searchText.searchTextInput}`)
  .then(res => {
    let response = res.text();
    return response
  }) 
  .then(searchResults => {
    let searchResultsObject = JSON.parse(searchResults);
    props.dispatch({
      type: 'LOAD_GOOGLE_RESULTS',
      googleResults: searchResultsObject.items
    });
  })
}

export default fetchGoogleResults;