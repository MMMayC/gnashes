import { GET_VOTES, POST_VOTE, GET_GNASHES } from "../actions/votesActions";

export default function condidatesReducers( state = {votes: [], gnashes: null}, action) {
  switch (action.type) {
    case GET_VOTES:
      return Object.assign({}, state, {
        votes: [...action.votes]
      });
    case GET_GNASHES:
      return Object.assign({}, state, {
        gnashes: action.gnashes[0]
      });
    case POST_VOTE:
      return Object.assign({}, state, {
        votes: [...state.votes, action.vote]
      });
    default:
      return state
  }
}
