import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { postVote } from "../redux/actions/votesActions"
import Candidate from "./candidate";

class NominateForm extends Component {
    constructor(props){
        super(props);
        this.closeNominateForm = this.closeNominateForm.bind(this);
        this.submitNomination = this.submitNomination.bind(this);
    }
    closeNominateForm() {
        let nominateFormElement = document.querySelector(".NominateForm");
        nominateFormElement.setAttribute("style", "display: none;");
    }
    submitNomination(e) {
        e.preventDefault();
        const nomination = JSON.stringify({
            candidate: this.props.currentCandidate.name,
            value: findDOMNode(this.refs.value).value,
            achievement: findDOMNode(this.refs.achievement).value,
            timestamp: Date.now()
        });
        console.log('JSON.stringify(nomination) :', nomination);
        this.props.postVote(nomination);
    }
  render() {
    return (
        <form className="NominateForm">
            {this.props.currentCandidate != null ? <Candidate candidate={this.props.currentCandidate} /> : ""}
            <label className="NominateForm-Label NominateForm-Value-Label">Value</label>
            <select className="NominateForm-Value-Select" ref="value">
                <option value="fun">Fun</option>
                <option value="respectable">Respectable</option>
                <option value="collaboration">Collaboration</option>
                <option value="curious">Curious</option>
                <option value="artisan">Artisan</option>
            </select>
            <label className="NominateForm-Label NominateForm-Achievement-Label">Achievement</label>
            <textarea className="NominateForm-Achievement-Textarea" ref="achievement"></textarea>
            <input type="submit" className="Button NominateForm-Submit" onClick={this.submitNomination}/>
            <a className="NominateForm-Cancel" onClick={this.closeNominateForm}>Cancel</a>
        </form>
    );
  }

}

function mapStateToProps(state) {
    const { votes } = state.votes
    return {
      votes
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({
      postVote: postVote
    }, dispatch)
  }
   
export default connect(mapStateToProps, mapDispatchToProps)(NominateForm)
