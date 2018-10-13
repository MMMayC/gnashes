import React, {Component} from "react";
import Candidate from "./candidate";

class NominateForm extends Component {
    constructor(props){
        super(props);
        this.closeNominateForm = this.closeNominateForm.bind(this);
    }
    closeNominateForm() {
        let nominateFormElement = document.querySelector(".NominateForm");
        nominateFormElement.setAttribute("style", "display: none;");
    }
  render() {
    return (
        <form className="NominateForm">
            {this.props.currentCandidate != null ? <Candidate candidate={this.props.currentCandidate} /> : ""}
            <label className="NominateForm-Label NominateForm-Value-Label">Value</label>
            <select className="NominateForm-Value-Select">
                <option value="fun">Fun</option>
                <option value="respectable">Respectable</option>
                <option value="collaboration">Collaboration</option>
                <option value="curious">Curious</option>
                <option value="artisan">Artisan</option>
            </select>
            <label className="NominateForm-Label NominateForm-Achievement-Label">Achievement</label>
            <textarea className="NominateForm-Achievement-Textarea"></textarea>
            <input type="submit" className="Button NominateForm-Submit" />
            <a className="NominateForm-Cancel" onClick={this.closeNominateForm}>Cancel</a>
        </form>
    );
  }

}


export default NominateForm;
