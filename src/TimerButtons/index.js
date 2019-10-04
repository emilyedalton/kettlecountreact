import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button, ButtonGroup,Navbar} from 'react-bootstrap'




// import Jumbotron from 'react-bootstrap/Jumbotron'

class TimerButtons extends Component {
    render () {
        const {reset, pause, play,increaseCount, decreaseCount, buttonStyle} = this.props

    
        return(


<div>
<Col/>
<Col lg = "true" className="justify-content-between" style={{border: "2px solid blue"}} > 
{/* <Navbar> */}
 {/* <Col md={8} >  */}
    {/* <ButtonGroup style={{border: "solid 2px red"}}className="mr-1"> */}
                <Button size ="lg" onClick={reset} style={buttonStyle} >reset</Button>
                <Button size ="lg" onClick={play} style={buttonStyle} > play</Button> 
                <Button size ="lg" onClick={pause} style={buttonStyle}>pause</Button> 
               
                <Button size ="lg" style={buttonStyle} className="float-right" onClick={increaseCount}>+</Button>
                <Button size ="lg"style ={buttonStyle}  className="float-right"onClick={decreaseCount}>-</Button>
              
               <Col/>
               
                {/* </ButtonGroup> */}
                </Col>
                </div>

        )
    }
}
    export default TimerButtons