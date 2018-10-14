import SERVER_URL from '../env';

let fetchBingResults = (props) => {
  fetch(SERVER_URL + 'twitter/' + props.searchText.selectedTrend + props.searchText.selectedSearchTerm + props.searchText.searchTextInput)
  .then(res => {
    let response = res.text();
    return response
  }) 
  .then(searchResults => {
    let searchResultsObject = JSON.parse(searchResults);
    props.dispatch({
      type: 'LOAD_TWITTER_RESULTS',
      twitterResults: searchResultsObject.statuses.slice(0, 10)
    });
  })
}

export default fetchBingResults;