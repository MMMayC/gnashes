import React, {Component} from "react";
import { connect } from "react-redux"
import Vote from "./vote";

class Votes extends Component {
  constructor(props) {
    super(props);
    this.findCandidateByName = this.findCandidateByName.bind(this);
    this.state = {
      currentPage: 1
    }
  }
  findCandidateByName(candidateName) {
    const candidate = this.props.candidates.filter(candidate => candidate.name == candidateName);
    return candidate[0];
  }
    render(){
      return (
        <div className="Votes">
          {
            this.props.votes && this.props.votes !=[] ?
            this.props.votes.map(vote => {
              return(
                <Vote vote={vote} candidate={this.findCandidateByName(vote.candidate)} />
              )
            }) 
            : ""
          }
          <div className="Votes-Count">{this.state.currentPage} | {this.props.votes && this.props.votes != [] ? this.props.votes.length : "" }</div>
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
 
export default connect(mapStateToProps)(Votes)
