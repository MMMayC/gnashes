import React, {Component} from "react";
import { connect } from "react-redux"
import Vote from "./vote";
import Gnashes from "./gnashes";

class Votes extends Component {
  constructor(props) {
    super(props);
    this.findCandidateByName = this.findCandidateByName.bind(this);
    this.getNextVote = this.getNextVote.bind(this);
    this.getPreviousVote = this.getPreviousVote.bind(this);
    this.state = {
      currentPage: 1,
      revealGnashes: false
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
    } else {
      this.setState({
        revealGnashes: true
      })
    }
  }
  getPreviousVote() {
    if(this.state.currentPage > 1) {
      this.setState({
        currentPage: -- this.state.currentPage
      });
    }
  }

  render(){
    var currentVote = this.props.votes && this.props.votes != [] ? this.props.votes[this.state.currentPage - 1] : null;
    return (
      <div className="Votes">
        {
          this.state.revealGnashes == true ?
          <Gnashes candidate={this.findCandidateByName(this.props.gnashes._id)} /> :
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
  const { votes, gnashes } = state.votes;
  const { candidates } = state.candidates;
  return {
    votes,
    candidates,
    gnashes
  }
}
 
export default connect(mapStateToProps)(Votes)
