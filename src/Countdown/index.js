import React, { Component } from 'react'
import '../'

class Countdown extends Component {

  render(){
    const {seconds}=this.props
    return <div style={{width: "100%", textAlign: "center"}}>
      <h1>{seconds}...</h1>
    </div>
  }
}
  export default Countdown


  
