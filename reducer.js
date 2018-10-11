let loadTrends = (oldState, action) => {
  return {
    ...oldState,
    trends: action.trends
  }
}

let selectTrend = (oldState, action) => {
  return {
    ...oldState,
    selectedTrend: action.trend,
  }
}

let selectSearchTerm = (oldState, action) => {
  return {
    ...oldState,
    selectedSearchTerm: action.term,
  }
}

let loadSearchResults = (oldState, action) => {
  // console.log(action.searchResults)
  return {
    ...oldState,
    searchResults: action.searchResults,
  }
}

let saveLink = (oldState, action) => {
  return {
    ...oldState,
    link: action.link
  }
}


let reducers = {
  'LOAD_TRENDS': loadTrends,
  'SELECT_TREND': selectTrend,
  'SELECT_SEARCH_TERM': selectSearchTerm,
  'LOAD_SEARCH_RESULTS': loadSearchResults,
  'SAVE_LINK': saveLink
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;