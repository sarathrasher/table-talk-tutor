let loadTrends = (oldState, action) => {
  return {
    ...oldState,
    trends: action.trends,
  }
}

let selectTrend = (oldState, action) => {
  return {
    ...oldState,
    selectedTrend: action.trend,
    searchText: {
      ...oldState.searchText,
      selectedTrend: `${action.trend} `
    }
  }
}

let selectSearchTerm = (oldState, action) => {
  return {
    ...oldState,
    selectedSearchTerm: action.term,
    searchText: {
      ...oldState.searchText,
      selectedSearchTerm: `${action.term} `
    }
  }
}

let loadGoogleResults = (oldState, action) => {
  // console.log(action.googleResults)
  return {
    ...oldState,
    googleResults: action.googleResults,
  }
}

let loadBingResults = (oldState, action) => {
  // console.log(action.bingResults)
  return {
    ...oldState,
    bingResults: action.bingResults,
  }
}

let loadTwitterResults = (oldState, action) => {
  // console.log(action.twitterResults)
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

let saveSearchText = (oldState, action) => {
  let newString = ''
  if (!action.searchTextInput.includes(oldState.selectedTrend) && !action.searchTextInput.includes(oldState.selectedSearchTerm)) {
    newString = action.searchTextInput
  } else if (action.searchTextInput.includes(oldState.selectedTrend) && action.searchTextInput.includes(oldState.selectedSearchTerm)) {
    let replacedString = action.searchTextInput.replace(`${oldState.selectedTrend} `, '');
    newString = replacedString.replace(`${oldState.selectedSearchTerm} `, '');
  }
  else if (action.searchTextInput.includes(oldState.selectedSearchTerm) && !action.searchTextInput.includes(selectedTrend)) {
    newString = action.searchTextInput.replace(`${oldState.selectedSearchTerm} `, '');
  } 
  else if (action.searchTextInput.includes(oldState.selectedTrend) && !action.searchTextInput.includes(selectedSearchTerm)) {
    newString = action.searchTextInput.replace(`${oldState.selectedTrend} `, '');
  } 

  return {
    ...oldState,
      searchTextInput: action.searchTextInput,
      searchText: {
        ...oldState.searchText,
        searchTextInput: newString
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
  'SAVE_SEARCH_TEXT': saveSearchText
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;