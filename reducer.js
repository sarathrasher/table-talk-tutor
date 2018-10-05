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
  console.log(action.term)
  return {
    ...oldState,
    selectedSearchTerm: action.term,
  }
}

let reducers = {
  'LOAD_TRENDS': loadTrends,
  'SELECT_TREND': selectTrend,
  'SELECT_SEARCH_TERM': selectSearchTerm,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;