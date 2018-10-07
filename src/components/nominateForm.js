import React, {Component} from "react";

class NominateForm extends Component {

  render() {
    return (
        <div className="Nominate-Modal">
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
                <input type="text" />
                <input type="submit" />
            </form>
        </div>
    );
  }

}


export default NominateForm;
