import React, {Component} from "react";
import IndividualVote from "./individualVote";

class VotesChart extends Component {
    render(){
      return (
        <div className="VotesChart">
          {
            this.props.votes && this.props.votes !=[] ?
            this.props.votes.map(vote => {
              return(
                <IndividualVote vote={vote} />
              )
            }) 
            : ""
          }
        </div>
      );
    }
}

export default VotesChart;
