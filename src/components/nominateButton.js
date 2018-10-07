import React, {Component} from "react";

class NominateButton extends Component {
  render() {
    return (
      <button className="NominateButton">
        <i className="fas fa-trophy fa-sm"></i>
        Nominate Me
      </button>
    );
  }
}

export default NominateButton;