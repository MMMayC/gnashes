import React, {Component} from 'react';
import NominateButton from './nominateButton';

class Candidate extends Component {

  Cardbaker(props){

    let cards = [], cardNumber = 1

    for(let candidate of props.candidates){
      cards.push(
           <div className="app-card" key={candidate.name}>
              <img src={candidate.profile_photo} width="200" />
              <p>{candidate.name}</p>
              <NominateButton />
           </div>
         )
      cardNumber++
    }

    return ( <div> {cards} </div> )

  }


  render() {

    return (
      <this.Cardbaker candidates={this.props.candidates} totalapps={this.props.candidates}/>
    );
  }

}


export default Candidate;
