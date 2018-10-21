import axios from "axios";

export const GET_VOTES = "GET_VOTES"
export const POST_VOTE = "POST_VOTE"

export function getVotes() {
  return dispatch => {
    axios.get("/votes").then(res => {
      dispatch({
        type: GET_VOTES,
        votes: res.data
      });
    }).catch(err => {
      throw(err);
    });
  }
}

export function postVote(vote) {
  return (dispatch) => {
    console.log('vote :', vote);
    axios.post("/vote", vote).then(res => {
      console.log('vote :', vote);
      dispatch({
        type: POST_VOTE,
        vote: vote
      });
    }).catch(err => {
      throw(err);
    });
  }
}