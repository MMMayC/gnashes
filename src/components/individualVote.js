import React, {Component} from "react";

class IndividualVote extends Component {
  render() {
    return (
      <div className="IndividualVote" key={this.props.vote._id}>
        <div>{this.props.vote.candidate}</div>
      </div>
    );
  }

}


export default IndividualVote;
