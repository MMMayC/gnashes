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
    const { isFetching, apps } = this.props
    let totalapps = apps.length;

    return (
       <div>
         {isFetching && apps.length === 0 && <h2>Loading...</h2>}
         {!isFetching && apps.length === 0 && <h2>Empty.</h2>}
         <Header />
         <Candidate apps={apps} totalapps={totalapps} />
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { isFetching, apps } = state
 
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(Nomination)
