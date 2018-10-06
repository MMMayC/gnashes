import React, {Component} from 'react';

class NominateButton extends Component {

  numbersLeadingZero(props) {
    let count = 0;

    // Append the leading zero (0) before the app number 
    count = ('0' + props.appno).slice(-2);
    return(
      <span className={props.withclass}>{count}</span>
    );

  }

  render() {
    return (
      <button className="Nominate-Button">
        Nominate!
      </button>
    );
  }

}


export default NominateButton;
