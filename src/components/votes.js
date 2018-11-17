import React, {Component} from "react";
import { connect } from "react-redux"
import Vote from "./vote";

class Votes extends Component {
  constructor(props) {
    super(props);
    this.findCandidateByName = this.findCandidateByName.bind(this);
    this.getNextVote = this.getNextVote.bind(this);
    this.getPreviousVote = this.getPreviousVote.bind(this);
    this.state = {
      currentPage: 1
    }
  }
  findCandidateByName(candidateName) {
    const candidate = this.props.candidates.filter(candidate => candidate.name == candidateName);
    return candidate[0];
  }
  getNextVote() {
    if(this.state.currentPage < this.props.votes.length) {
      this.setState({
        currentPage: ++ this.state.currentPage
      });
    }
  }
  getPreviousVote() {
    if(this.state.currentPage > 1) {
      this.setState({
        currentPage: -- this.state.currentPage
      });
    }
  }
  getGnashes() {

  }
  render(){
    var currentVote = this.props.votes && this.props.votes != [] ? this.props.votes[this.state.currentPage - 1] : null;
    return (
      <div className="Votes">
        {
          currentVote ?
            <Vote vote={currentVote} candidate={this.findCandidateByName(currentVote.candidate)} />
            : ""
        }
        <div className="Votes-Count">{this.state.currentPage} | {this.props.votes && this.props.votes != [] ? this.props.votes.length : "" }</div>
        <div className="Votes-Arrow">
          <div className="Votes-Arrow-Left" onClick={this.getPreviousVote}><i className="fas fa-chevron-left"></i></div>
          <div className="Votes-Arrow-Right" onClick={this.getNextVote}><i className="fas fa-chevron-right"></i></div>
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
 
export default connect(mapStateToProps)(Votes)
