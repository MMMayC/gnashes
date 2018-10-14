import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { fetchVotesIfNeeded } from "../redux/actions/votesActions"
import Header from "./header"
import VotesChart from "./votesChart"
import VotesSummary from "./votesSummary"



class Result extends Component {

  componentDidMount() {
    this.props.fetchVotesIfNeeded()
  }


  render() {
    const { votes } = this.props
    console.log('votes :', votes);
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
    fetchVotesIfNeeded: fetchVotesIfNeeded
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Result)
