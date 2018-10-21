import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { getVotes } from "../redux/actions/votesActions"
import Header from "./header"
import VotesChart from "./votesChart"
import VotesSummary from "./votesSummary"



class Result extends Component {

  componentDidMount() {
    this.props.getVotes()
  }


  render() {
    const { votes } = this.props
    return (
       <div>
         <Header />
         <VotesChart votes={votes} />
         <VotesSummary votes={votes} />
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { isFetching, votes } = state.votes
  return {
    isFetching,
    votes
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getVotes: getVotes
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Result)
