import { REQUEST_VOTES,  RECEIVE_VOTES, POST_VOTE } from "../actions/votesActions";

export default function condidatesReducers( state = {isFetching: false, votes: []}, action) {
  switch (action.type) {
    case REQUEST_VOTES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_VOTES:
      return Object.assign({}, state, {
        isFetching: false,
        votes: action.votes
      });
    case POST_VOTE:
      return Object.assign({}, state, {
        votes: [...state.votes, action.vote]
      })
    default:
      return state
  }
}
