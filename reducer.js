let loadTrends = (oldState, action) => {
  return {
    ...oldState,
    trends: action.trends,
  }
}

let selectTrend = (oldState, action) => {
  return {
    ...oldState,
    error: action.error,
    searchText: {
      ...oldState.searchText,
      selectedTrend: action.trend
    }
  }
}

let selectSearchTerm = (oldState, action) => {
  return {
    ...oldState,
    error: action.error,
    searchText: {
      ...oldState.searchText,
      selectedSearchTerm: action.term
    }
  }
}

let loadGoogleResults = (oldState, action) => {
  return {
    ...oldState,
    googleResults: action.googleResults,
  }
}

let loadBingResults = (oldState, action) => {
  return {
    ...oldState,
    bingResults: action.bingResults,
  }
}

let loadTwitterResults = (oldState, action) => {
  console.log(action.twitterResults)
  return {
    ...oldState,
    twitterResults: action.twitterResults,
  }
}

let saveLink = (oldState, action) => {
  return {
    ...oldState,
    link: action.link
  }
}

let handleError = (oldState, action) => {
  return {
    ...oldState,
    error: action.error
  }
}

let saveSearchText = (oldState, action) => {
  return {
    ...oldState,
      error: action.error,
      searchText: {
        ...oldState.searchText,
        searchTextInput: action.searchTextInput
      }
  }
}

let reducers = {
  'LOAD_TRENDS': loadTrends,
  'SELECT_TREND': selectTrend,
  'SELECT_SEARCH_TERM': selectSearchTerm,
  'LOAD_GOOGLE_RESULTS': loadGoogleResults,
  'LOAD_BING_RESULTS': loadBingResults,
  'LOAD_TWITTER_RESULTS': loadTwitterResults,
  'SAVE_LINK': saveLink,
  'SAVE_SEARCH_TEXT': saveSearchText,
  'HANDLE_ERROR': handleError,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;