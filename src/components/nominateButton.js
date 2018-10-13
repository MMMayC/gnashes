import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateCurrentCandidate } from "../redux/actions";

class NominateButton extends Component {
  constructor(props) {
    super(props);
    this.openNominateForm = this.openNominateForm.bind(this);
  }
  openNominateForm() {
    // console.log('document :', document);
    // console.log('props :', props);
    console.log('this.props :', this.props);
    this.props.updateCurrentCandidate(this.props.candidate);
    console.log('this.props after update :', this.props);
    let nominateFormElement = document.querySelector(".NominateForm");
    nominateFormElement.setAttribute("style", "display: flex;");
  }
  render() {
    return (
      <button className="Button NominateButton" onClick={this.openNominateForm}>
        <i className="fas fa-trophy"></i>
        Nominate
      </button>
    );
  }
}
function mapStateToProps(state) {
  const { isFetching, candidates, currentCandidate } = state;
  // console.log('state :', state);
  return {
    isFetching,
    candidates,
    currentCandidate
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateCurrentCandidate: updateCurrentCandidate
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NominateButton);