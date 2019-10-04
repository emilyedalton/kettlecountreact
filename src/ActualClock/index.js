import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ActualClock extends Component {
    

    render () {
        const {style, time, prefix,} = this.props;

return(
    <div>
    <h3 style={style} className="seconds"> {time} {prefix} </h3>
    <br /> 



</div>



)
    }
}

export default ActualClock