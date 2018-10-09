import React, {Component} from "react";

class NominateButton extends Component {
  constructor(props) {
    super(props);
    this.openNominateForm = this.openNominateForm.bind(this);
  }
  openNominateForm() {
    // console.log('document :', document);
    // console.log('props :', props);
    let nominateFormElement = document.querySelector(".NominateForm");
    nominateFormElement.setAttribute("style", "display: block;");
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

export default NominateButton;