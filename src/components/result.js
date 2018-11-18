import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getVotes, getGnashes } from "../redux/actions/votesActions"
import { getCandidates } from "../redux/actions/candidatesActions"
import Header from "./header"
import Votes from "./votes"
import ChooseDate from "./chooseDate";

class Result extends Component {
  componentDidMount() {
    this.props.getCandidates();
  }

  render() {
    return (
       <div className="Result">
         <Header />
         {
           this.props.gnashes ?
           <Votes /> :
           <ChooseDate />
          }
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getVotes: getVotes,
    getCandidates: getCandidates,
    getGnashes: getGnashes
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Result)