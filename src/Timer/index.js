// import Timer from 'react-timer'
import React, { Component } from 'react'
import SecondsTohhmmss from './SecondsTohhmmss'
import PropTypes from 'prop-types'

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
            this.state = { clock: 0, time: '' }
          }
        
          componentDidMount() {
            this.play()
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
        //   handleKeypause= event => {
        //     if (event.key == 'p') {
        //       this.pause();
        //     }
        //   };
        
          play() {
            if (!interval) {
              offset = Date.now()
              interval = setInterval(this.update.bind(this), this.props.options.delay)
            }
          }
          handleKeyPress= event => {
              switch (event.key){
              case "Enter":
             this.play()
             case "r":
             this.reset()
             break;
             case "p":
             this.pause()
             break;
              }
            }
        
          reset() {
            let clockReset = 0
            this.setState({clock: clockReset })
            let time = SecondsTohhmmss(clockReset / 1000)
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
        
          render() {
            const timerStyle = {
              margin: "0px",
              padding: "2em"
            };
        
            const buttonStyle = {
              background: "#fff",
              color: "red",
              border: "1px solid #ddd",
              marginRight: "5px",
              padding: "10px",
              fontWeight: "200"
            };
        
            const secondsStyles = {
              fontSize: "200%",
              fontWeight: "200",
              lineHeight: "1.5",
              margin: "0",
              color: "#666"
            };

            return (
              <div style={timerStyle} className="react-timer" >
                <h3 style={secondsStyles} className="seconds"> {this.state.time} {this.props.prefix} </h3>
                <input onKeyPress={this.handleKeyPress}/>
                <br />
                <button onClick={this.reset.bind(this)} style={buttonStyle} >reset</button>
                <button onClick={this.play.bind(this)} style={buttonStyle} > play</button> 
                <button onClick={this.pause.bind(this)} style={buttonStyle}>pause</button>
              </div>
            )
          }
        }
        
  

export default TimerDisplay
