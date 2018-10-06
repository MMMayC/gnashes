import React, {Component} from 'react';

class NominateForm extends Component {

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
        <div className='Nominate-Modal'>
            <form className="Nominate-Modal-Form">
                <label>Value</label>
                <select>
                    <option value="fun">Fun</option>
                    <option value="respectable">Respectable</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="curious">Curious</option>
                    <option value="artisan">Artisan</option>
                </select>
                <label>Achievement</label>
                <input type='text' />
                <input type='submit' />
            </form>
        </div>
    );
  }

}


export default NominateForm;
