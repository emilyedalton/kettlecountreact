import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SecondsTohhmmss from '../Timer/SecondsTohhmmss'
import Countdown from 'react-countdown-now';
// import TimerDisplay from '../Timer/index'
import TestComponent from '../Timer/Test'

// const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <TestComponent />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};
let offset = null, interval = null


class TenSecond extends Component {
    // static get propTypes () {
    //     return {
    //       options: PropTypes.object
    //     }
    //   }
    //   constructor(props) {
    //     super(props)
    //     this.state = { clock: 0, time: '', count: 0}
    //   }
    
    //   componentDidMount() {
    //     this.play()
    //     document.addEventListener("keydown", this.handleKeyPress);

    //   }
    
    //   componentWillUnmount() {
    //     this.pause()
    //   }
    
    //   pause() {
    //     if (interval) {
    //       clearInterval(interval)
    //       interval = null
    //     }
    //   }
 
    
    //   play() {
    //     if (!interval) {
    //       offset = Date.now()
    //       interval = setInterval(this.update.bind(this), this.props.options.delay)
    //     }
    //   }

    //   increaseCount = () => {
    //     this.setState({
    //       count: this.state.count + 1
    //     })
    //   }

    //   decreaseCount = () => {
    //     this.setState({
    //       count: this.state.count -1
    //     })
    //   }
     
    
    //   reset() {
    //     let clockReset = 0
    //     this.setState({clock: clockReset })
    //     let time = SecondsTohhmmss(clockReset / 1000)
    //     this.setState({time: time })
    //   }
    // //   handleKeyReset= event => {
    // //     if (event.key == 'r') {
    // //       this.reset();
    // //     }
    // //   };
    
    //   update() {
    //     let clock = this.state.clock
    //     clock += this.calculateOffset()
    //     this.setState({clock: clock })
    //     let time = SecondsTohhmmss(clock / 1000)
    //     this.setState({time: time })
    //   }
    
    //   calculateOffset() {
    //     let now = Date.now()
    //     let newOffset = now - offset
    //     offset = now
    //     return newOffset
    //   }
    //   handleKeyPress= event => {
    //     switch (event.key){
    //     case "Enter":
    //     this.play()
    //     break;
    //     case "r":
    //     this.reset()
    //     break;
    //     case "p":
    //     this.pause()
    //     break;
    //     case "ArrowUp":
    //     this.increaseCount()
    //     break;
    //     case "ArrowDown":
    //     this.decreaseCount()
    //     break;
    //      }
    //    }
    render () {
       
        
          
      
            // const timerStyle = {
            //   margin: "0px",
            //   padding: "2em",
            //   border: "2px solid red"
            // };
        
          
            // const buttonStyle = {
            //   background: "#fff",
            //   color: "black",
            //   border: "1px solid black",
            //   marginRight: "5px",
            //   padding: "10px",
            //   fontWeight: "200"
              

            // };
        
            // const secondsStyles = {
            //   fontSize: "200px",
            //   fontWeight: "200",
            //   lineHeight: "1.5",
            //   margin: "0",
            //   color: "#666",
            //   textAlign: "center"
            // };

        return(
<Countdown
    date={Date.now() + 5000}
    renderer={renderer}
  />
        )}}

export default TenSecond