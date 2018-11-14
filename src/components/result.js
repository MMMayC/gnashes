import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getVotes } from "../redux/actions/votesActions"
import { getCandidates } from "../redux/actions/candidatesActions"
import Header from "./header"
import VotesChart from "./votesChart"
import VotesSummary from "./votesSummary"



class Result extends Component {

  componentDidMount() {
    this.props.getVotes();
    // this.props.getCandidates();
  }


  render() {
    const { votes } = this.props;
    
    return (
       <div>
         <Header />
         <VotesChart votes={votes} candidates={this.props.candidates} />
         <VotesSummary votes={votes} />
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getVotes: getVotes,
    getCandidates: getCandidates
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Result)