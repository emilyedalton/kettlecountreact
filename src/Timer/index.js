// import Timer from 'react-timer'
import React, { Component } from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'
import PropTypes from 'prop-types'
import Counter from '../Counter'
import Container from 'react-bootstrap/Container'
import TimerButtons from '../TimerButtons'
import ActualClock from '../ActualClock'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




let offset = null, interval = null



  /* delay is just the delay on showing the update of the timer */
    
       
 
        
        /**
         * Timer module
         * A simple timer component.
        **/
       class TimerDisplay extends Component {
  
      

          static get propTypes () {
            return {
              options: PropTypes.object
            }
          }
        
          constructor(props) {
            super(props)
            this.state = { clock: 0, time: '', count: 0}
          }
        
          componentDidMount() {
            this.play()
            document.addEventListener("keydown", this.handleKeyPress);

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
            this.setState({clock: clockReset })
            let time = SecondsTohhmmss(clockReset / 1000)
            this.setState({time: time })
          }
          countdown(){
              let countdown = 10
              this.setState({clock: countdown })
              let time = SecondsTohhmmss(countdown - 1000)
            this.setState({time: time })
          }
        //   handleKeyReset= event => {
        //     if (event.key == 'r') {
        //       this.reset();
        //     }
        //   };
        
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
            this.play()
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

        //    countdown(){
        //     let clockReset = 10
        //     this.setState({clock: clockReset })
        //     let time = SecondsTohhmmss-clockReset
        //     this.setState({time: time })
        //   }
          render() {
            const timerStyle = {
              margin: "0px",
              padding: "2em",
              border: "2px solid red"
            };
        
          
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
              lineHeight: "1.5",
              margin: "0",
              color: "#666",
              textAlign: "center"
            };

            return (
              <Container fluid className="react-timer"  >
              {/* <Row style={timerStyle}   >
              <Col style={{border:"solid 2px orange"}}/>
              <Col xs={8}  > */}
            <ActualClock style={secondsStyles} className="seconds" time={this.state.time} prefix={this.props.prefix}/>
                <br /> 
               
                {/* </Col>
                <Col style={{border:"solid 2px orange"}}/>

</Row> */}

<Counter
count={this.state.count}
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
