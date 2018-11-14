import React, {Component} from "react";
import Candidate from "./candidate";

class IndividualVote extends Component {
  constructor(props) {
    super(props);
    this.findCandidateByName = this.findCandidateByName.bind(this);
  }
  // findCandidateByName(candidateName) {
  //   this.props.candidates.map(candidate => {
  //     if (candidate.name == candidateName)
  //       return candidate;
  //   });
  // }
  render() {
    return (
      <div className="IndividualVote" key={this.props.vote._id}>
        <Candidate />
      </div>
    );
  }

}


export default IndividualVote;
