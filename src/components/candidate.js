import React, {Component} from 'react';
import NominateButton from './nominateButton';

class Candidate extends Component {

  Cardbaker(props){

    let cards = [], cardNumber = 1

    for(let app of props.apps){
      cards.push(
           <div className="app-card" key={app.name}>
                <NominateButton img={app.img} appno={cardNumber} totalapps={props.totalapps} />
           </div>
         )
      cardNumber++
    }

    return ( <div> {cards} </div> )

  }


  render() {

    return (
      <this.Cardbaker apps={this.props.apps} totalapps={this.props.totalapps}/>
    );
  }

}


export default Candidate;
