import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { fetchCandidatesIfNeeded } from "../redux/actions/candidatesActions"

import Candidates from "./candidates"
import Header from "./header"
import NomimateForm from "./nominateForm"


class Nomination extends Component {

  componentDidMount() {
    this.props.fetchCandidatesIfNeeded()
  }


  render() {
    const { isFetching, candidates, currentCandidate } = this.props

    return (
       <div>
         <Header />
         <Candidates candidates={candidates} />
         <NomimateForm currentCandidate={currentCandidate} />
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { isFetching, candidates, currentCandidate } = state.candidates
  return {
    isFetching,
    candidates,
    currentCandidate
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchCandidatesIfNeeded: fetchCandidatesIfNeeded
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Nomination)
