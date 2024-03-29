// import Timer from 'react-timer'
import React, { Component } from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'
import PropTypes from 'prop-types'
import Counter from '../Counter'
import Container from 'react-bootstrap/Container'
import TimerButtons from '../TimerButtons'
import ActualClock from '../ActualClock'
import Countdown from '../Countdown'
import Header from '../Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let offset = null, interval = null

  /* delay is just the delay on showing the update of the timer */
    
      
       class TimerDisplay extends Component {
  
          static get propTypes () {
            return {
              options: PropTypes.object
            }
          }
        
          constructor(props) {
            super(props)
            this.tick = this.tick.bind(this)
            this.state = { clock: 0, time: '00:00:00', count: 0,  countDownTime: {}, seconds: 10}
            

          }
          
        
          componentDidMount() {
            document.addEventListener("keydown", this.handleKeyPress);
            // this.timer = setInterval(this.tick, 1000);
          }

          tick(){
            if (this.state.seconds > 0) {
              this.setState({seconds: this.state.seconds - 1})
            } else {
              clearInterval(this.timer);
            this.play()        
              }
          }
        
          componentWillUnmount() {
            this.pause()
          }
        
          pause() {
            if (interval) {
              clearInterval(interval)
              interval = null
            }
          }
     
        
          play() {
            if (!interval) {
              offset = Date.now()
              interval = setInterval(this.update.bind(this), this.props.options.delay)
            }
          }

          increaseCount = () => {
            this.setState({
              count: this.state.count + 1
            })
          }

          decreaseCount = () => {
            this.setState({
              count: this.state.count -1
            })
          }
         
        
          reset() {
            let clockReset = 0
            let clockSeconds = 10
            this.setState({seconds: clockSeconds})
            this.setState({clock: clockReset })
            let time = SecondsTohhmmss(clockReset / 1000)
            this.setState({time: '00:00:00' })
          }
      
        
          update() {
            let clock = this.state.clock
            clock += this.calculateOffset()
            this.setState({clock: clock })
            let time = SecondsTohhmmss(clock / 1000)
            this.setState({time: time })
          }
        
          calculateOffset() {
            let now = Date.now()
            let newOffset = now - offset
            offset = now
            return newOffset
          }
          
          handleKeyPress= event => {
            switch (event.key){
            case "Enter":
            this.timer = setInterval(this.tick, 1000);
            // this.play()
            break;
            case "r":
            this.reset()
            break;
            case "p":
            this.pause()
            break;
            case "ArrowUp":
            this.increaseCount()
            break;
            case "ArrowDown":
            this.decreaseCount()
            break;
             }
           }

       
          render() {
            const buttonStyle = {
              background: "#fff",
              color: "black",
              border: "1px solid black",
              marginRight: "5px",
              padding: "10px",
              fontWeight: "200"
              

            };
        
            const secondsStyles = {
              fontSize: "200px",
              fontWeight: "200",
              // lineHeight: "1.5",
              margin: "auto",
              color: "black",
              textAlign: "center"
            };

            return (
<Container fluid className="react-timer" >
<Header/>

              <Row>
              <Col xs={12}  > 
              {this.state.seconds > 0 ? (

              <Countdown 
              seconds={this.state.seconds} 
              style={secondsStyles}/> 
                  ) : (
            <ActualClock 
            style={secondsStyles} 
            className="seconds" 
            time={this.state.time} 
            prefix={this.props.prefix}/>
               ) } 
                <br /> 
               
               </Col>
                <Col />

</Row> 

<Counter
count={this.state.count} 
style={secondsStyles}
/>
<TimerButtons
reset={this.reset.bind(this)}
play={this.play.bind(this)}
pause={this.pause.bind(this)}
increaseCount={this.increaseCount}
decreaseCount={this.decreaseCount}
buttonStyle={buttonStyle}/>

              </Container>
            )
          }
        }
        
  

export default TimerDisplay
