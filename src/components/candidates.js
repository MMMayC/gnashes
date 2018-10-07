import React, {Component} from "react";
import NominateButton from "./nominateButton";

class Candidates extends Component {

  Cardbaker(props){

    let candidates = []

    for(let candidate of props.candidates){
      candidates.push(
           <div className="Candidate" key={candidate.name}>
              <div className="Candidate-Photo">
                <img src={candidate.profile_photo} />
                <NominateButton />
              </div>
              <div className="Candidate-Name">{candidate.name}</div>
              
           </div>
         )
    }

    return ( <div className="Candidates"> {candidates} </div> )

  }


  render() {

    return (
      <this.Cardbaker candidates={this.props.candidates} />
    );
  }

}


export default Candidates;
