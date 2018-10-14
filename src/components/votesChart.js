import React, {Component} from "react";
import IndividualVote from "./individualVote";

class VotesChart extends Component {
    render(){
      return (
        <div className="VotesChart">
          {this.props.votes.map(vote => {
            <IndividualVote vote={vote} />
          })}
        </div>
      );
    }
}

export default VotesChart;
