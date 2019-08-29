import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Counter extends Component {

    render () {
        const {increaseCount, decreaseCount, buttonStyle, count} = this.props;

return(
<div>
<Row>
<Col/>
<Col xs={6} style={{textAlign: "center"}} >
<h1 >{count}</h1>
      <button style ={buttonStyle} onClick={increaseCount}>+</button>
      <button style ={buttonStyle} onClick={decreaseCount}>-</button> </Col>
                <Col/>
</Row>





</div>



)
    }
}

export default Counter