
export const REQUEST_CANDIDATES = "REQUEST_CANDIDATES"
export const RECEIVE_CANDIDATES = "RECEIVE_CANDIDATES"
export const UPDATE_CURRENT_CANDIDATE = "UPDATE_CURRENT_CANDIDATE"


function requestCandidates() {
  return {
    type: REQUEST_CANDIDATES
  }
}

function receiveCandidates(json) {
  return {
    type: RECEIVE_CANDIDATES,
    candidates: json
  }
}

function fetchCandidates() {
  return dispatch => {
    dispatch(requestCandidates())
    return fetch(`data/candidates.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveCandidates(json)))
  }
}

function shouldFetchCandidates(state) {
  const candidates = state.candidates
  if (candidates.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchCandidatesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCandidates(getState())) {
      return dispatch(fetchCandidates())
    }
  }
}

export function updateCurrentCandidate(candidate) {
  return dispatch => {
      dispatch({
        type: UPDATE_CURRENT_CANDIDATE,
        currentCandidate: candidate
      });
  }
}