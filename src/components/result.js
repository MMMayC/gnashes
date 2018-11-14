import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getVotes } from "../redux/actions/votesActions"
import { getCandidates } from "../redux/actions/candidatesActions"
import Header from "./header"
import Votes from "./votes"

class Result extends Component {
  componentDidMount() {
    this.props.getCandidates();
    this.props.getVotes();
  }

  render() {
    return (
       <div>
         <Header />
         <Votes />
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