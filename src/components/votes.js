import React, {Component} from "react";
import { connect } from "react-redux";
import update from 'immutability-helper';
import Vote from "./vote";
import Gnashes from "./gnashes";

class Votes extends Component {
  constructor(props) {
    super(props);
    this.findCandidateByName = this.findCandidateByName.bind(this);
    this.getNextVote = this.getNextVote.bind(this);
    this.updateVotesOverview = this.updateVotesOverview.bind(this);
    this.getPreviousVote = this.getPreviousVote.bind(this);
    this.state = {
      currentPage: 1,
      revealGnashes: false,
      overviewCandidates: [],
      overviewVotes: []
    }
  }
  findCandidateByName(candidateName) {
    const candidate = this.props.candidates.filter(candidate => candidate.name == candidateName);
    return candidate[0];
  }
  getNextVote() {
    if(this.state.currentPage < this.props.votes.length) {
      this.setState({
        currentPage: ++ this.state.currentPage,
      });
    } else {
      this.setState({
        revealGnashes: true
      })
    }
    this.updateVotesOverview();
  }
  updateVotesOverview(){
    if(this.state.currentPage == 1) {
      console.log('this.props.votes[0].candidate :', this.props.votes[0].candidate);
      this.setState({
        overviewCandidates: [this.props.votes[0].candidate],
        overviewVotes: [1]
      })
    }

    const currentCandidate = this.props.votes[this.state.currentPage - 1].candidate;
    const candidateIndex = this.state.overviewCandidates.indexOf(currentCandidate);

    if(candidateIndex > -1 ) {
      this.setState({
        overviewVotes: update(this.state.overviewVotes, {candidateIndex: {$set: ++ this.state.overviewVotes[candidateIndex]}})
      })
    } else {
      this.setState({
        overviewCandidates: update(this.state.overviewCandidates, {$push: [currentCandidate]}),
        overviewVotes: update(this.state.overviewVotes, {$push: [1]})
      })
    }

    console.log('this.state.overviewCandidates :', this.state.overviewCandidates);
    console.log('this.state.overviewVotes :', this.state.overviewVotes);

  }
  getPreviousVote() {
    if(this.state.currentPage > 1) {
      this.setState({
        currentPage: -- this.state.currentPage
      });
    }
  }

  render(){
    let currentVote = this.props.votes && this.props.votes != [] ? this.props.votes[this.state.currentPage - 1] : null;
    return (
      <div className="Votes">
        {
          this.state.revealGnashes == true ?
          <Gnashes candidate={this.findCandidateByName(this.props.gnashes._id)} /> :
            currentVote ?
              <Vote vote={currentVote} candidate={this.findCandidateByName(currentVote.candidate)} />
              : ""
        }
        <div className="Votes-Actions">
          <div className="Votes-Actions-Arrow Votes-Actions-Arrow-Left" onClick={this.getPreviousVote}><i className="fas fa-chevron-left"></i></div>
          <div className="Votes-Actions-Count">{this.state.currentPage} | {this.props.votes && this.props.votes != [] ? this.props.votes.length : "" }</div>
          <div className="Votes-Actions-Arrow Votes-Actions-Arrow-Right" onClick={this.getNextVote}><i className="fas fa-chevron-right"></i></div>
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
