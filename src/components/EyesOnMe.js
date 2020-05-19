// Code EyesOnMe Component Here
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
}
