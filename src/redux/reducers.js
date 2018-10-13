import { REQUEST_APPS,  RECEIVE_APPS, UPDATE_CURRENT_CANDIDATE } from "./actions";

function condidates( state = {isFetching: false, condidates: [], currentCandidate: null}, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_APPS:
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

export default condidates
