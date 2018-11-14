import React, {Component} from "react";
import Candidate from "./candidate";

class Vote extends Component {
  render() {
    return (
      <div className="Vote" id={`Vote_${this.props.vote._id}`} key={this.props.vote._id}>
        <Candidate candidate={this.props.candidate} />
        <div>{this.props.vote.value}</div>
        <div>{this.props.vote.achievement}</div>
      </div>
    );
  }

}

export default Vote;
