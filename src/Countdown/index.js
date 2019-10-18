import React, { Component } from 'react'
import '../'

class Countdown extends Component {

  render(){
    const {seconds, style}=this.props
    return (
      <div>
      <h2 style={style} classname="seconds"> {seconds}</h2>

    </div>
    )
  }
}
  export default Countdown


  
