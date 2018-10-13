
export const REQUEST_VOTES = "REQUEST_VOTES"
export const RECEIVE_VOTES = "RECEIVE_VOTES"
export const UPDATE_CURRENT_CANDIDATE = "UPDATE_CURRENT_CANDIDATE"


function requestVotes() {
  return {
    type: REQUEST_VOTES
  }
}

function receiveVotes(json) {
  return {
    type: RECEIVE_VOTES,
    candidates: json
  }
}

function fetchVotes() {
  return dispatch => {
    dispatch(requestVotes())
    return fetch(`data/votes.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveVotes(json)))
  }
}

function shouldFetchVotes(state) {
  const candidates = state.candidates
  if (candidates.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchVotesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchVotes(getState())) {
      return dispatch(fetchVotes())
    }
  }
}