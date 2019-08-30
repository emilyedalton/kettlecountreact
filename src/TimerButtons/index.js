import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button, ButtonGroup, ButtonToolbar, Navbar} from 'react-bootstrap'




// import Jumbotron from 'react-bootstrap/Jumbotron'

class TimerButtons extends Component {
    render () {
        const {reset, pause, play,increaseCount, decreaseCount, buttonStyle} = this.props

    
        return(



<Row>
<Col/>
<Col xs={12}  >
<Navbar style={{border:"solid 2px red"}}>
<Col md={8} style={{border:"solid 2px blue"}}>
    <ButtonGroup style={{border:"solid 2px blue"}} className="mr-2">
                <Button size ="lg" onClick={reset} style={buttonStyle} >reset</Button>
                <Button size ="lg" onClick={play} style={buttonStyle} > play</Button> 
                <Button size ="lg" onClick={pause} style={buttonStyle}>pause</Button> 
                </ButtonGroup>
                </Col>
                <Col md={4} style={{TextAlign:"center"}} style={{border:"solid 2px green"}}>
                <ButtonGroup >
                <Button size ="lg" style={buttonStyle} onClick={increaseCount}>+</Button>
                <Button size ="lg"style ={buttonStyle} onClick={decreaseCount}>-</Button>
                </ButtonGroup>
                </Col>
                </Navbar>
                </Col>
                <Col/>
</Row>
        )
    }
}
    export default TimerButtons