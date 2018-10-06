import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'

import Candidate from './candidate'
import Header from './header'


class Nomination extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }


  render() {
    const { isFetching, candidates } = this.props
    let totalapps = candidates.length;

    return (
       <div>
         {isFetching && candidates.length === 0 && <h2>Loading...</h2>}
         {!isFetching && candidates.length === 0 && <h2>Empty.</h2>}
         <Header />
         <Candidate candidates={candidates} totalapps={totalapps} />
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { isFetching, candidates } = state
 
  return {
    isFetching,
    candidates
  }
}
 
export default connect(mapStateToProps)(Nomination)
