import SERVER_URL from '../env';

let fetchBingResults = (props) => {
  fetch(SERVER_URL + 'bing/' + props.searchText.selectedTrend + props.searchText.selectedSearchTerm + props.searchText.searchTextInput)
  .then(res => {
    let response = res.text();
    return response
  }) 
  .then(searchResults => {
    let searchResultsObject = JSON.parse(searchResults);
    console.log('hello')
    props.dispatch({
      type: 'LOAD_BING_RESULTS',
      bingResults: searchResultsObject
    });
  })
}

export default fetchBingResults;