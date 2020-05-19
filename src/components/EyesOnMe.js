// Code EyesOnMe Component Here
<<<<<<< HEAD
import React, {Component} from 'react'

export default class EyesOnMe extends Component {
  
  render(){
     return (
       <button onFocus={this.focusing} onBlur={this.bluring}>Focus</button>
       )
   }
  bluring = () => {
    console.log("Good!")
  }
  
  focusing = () => {
    console.log("Hey! Eyes on me!")
  }
  
=======
import React {Component} from 'react'

export default class EyesOnMe extends Component {
  
>>>>>>> a69363db702ecb7e65e08ed28e33fccc2f5f100a
}
