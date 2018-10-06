import { REQUEST_APPS,  RECEIVE_APPS } from './actions';

function condidates( state = {isFetching: false, condidates: []}, action) {
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
    default:
      return state
  }
}

export default condidates
