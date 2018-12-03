import React, {Component} from "react";
import Candidate from "./candidate";
import { connect } from "react-redux";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.getCount = this.getCount.bind(this);
  }
  getCount() {
    let countString = "";
    for(let i = 0; i < this.props.votesCount; i ++) {
      countString += `<i className='fas fa-fish' key='fish_${i}'></i>`
    }
    return countString;
  }
  render() {
    return (
      <div className="Overview" key={this.props.candidate._id}>
          <Candidate candidate={this.props.candidate} />
          <div className="Overview-VoteCount">
          </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  const { votes } = state.votes;
  const { candidates } = state.candidates;
  return {
    votes,
    candidates
  }
}
 
export default connect(mapStateToProps)(Overview)
