// Code Keypad Component Here
<<<<<<< HEAD
import React, {Component} from 'react'
=======
import React {Component} from 'react'
>>>>>>> a69363db702ecb7e65e08ed28e33fccc2f5f100a

export default class Keypad extends Component {
  render(){
    return (
<<<<<<< HEAD
      <input onKeyUp={this.enterPassword} type="password" />
      )
  }
  
  enterPassword = () => {
    console.log('Entering password...')
  }
  
=======
      <input onKeyUp={console.log('Entering password')} type="password" />
      )
  }
  
>>>>>>> a69363db702ecb7e65e08ed28e33fccc2f5f100a
  
  
}