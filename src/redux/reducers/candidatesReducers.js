import { REQUEST_CANDIDATES,  RECEIVE_CANDIDATES, UPDATE_CURRENT_CANDIDATE } from "../actions/candidatesActions";

export default function condidatesReducers( state = {isFetching: false, condidates: [], currentCandidate: null}, action) {
  switch (action.type) {
    case REQUEST_CANDIDATES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CANDIDATES:
      return Object.assign({}, state, {
        isFetching: false,
        candidates: action.condidates
      });
    case UPDATE_CURRENT_CANDIDATE:
      return Object.assign({}, state, {
        currentCandidate: action.currentCandidate
      })
    default:
      return state
  }
}
