import React, {Component} from "react"
import { connect } from "react-redux"
import { fetchAppsIfNeeded } from "../redux/actions"

import Candidates from "./candidates"
import Header from "./header"
import NomimateForm from "./nominateForm"


class Nomination extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
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
  const { isFetching, candidates, currentCandidate } = state
  return {
    isFetching,
    candidates,
    currentCandidate
  }
}
 
export default connect(mapStateToProps)(Nomination)
