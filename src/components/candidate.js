import React, {Component} from "react";
import NominateButton from "./nominateButton";

class Candidate extends Component {
  render() {
    return (
    <div className="Candidate" key={this.props.candidate.name}>
        <div className="Candidate-Photo">
          <img src={this.props.candidate.profile_photo} />
          {this.props.children}
        </div>
        <div className="Candidate-Name">{this.props.candidate.name}</div>
     </div>
    );
  }

}


export default Candidate;
