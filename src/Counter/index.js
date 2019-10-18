import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Counter extends Component {

    render () {
        const {style, count} = this.props;

return(
<div>
<Row>
<Col/>
<Col xs={6} >
<h4 style={style} classname="seconds">{count}</h4>
 </Col>
 <Col/>
</Row>





</div>



)
    }
}

export default Counter