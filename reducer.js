let loadTrends = (oldState, action) => {
  console.log(action.trends);
  return {
    ...oldState,
    trends: action.trends
  }
}

let reducers = {
  'LOAD_TRENDS': loadTrends,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;