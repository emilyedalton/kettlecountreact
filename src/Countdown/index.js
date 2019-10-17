import React, { Component } from 'react'
import '../'

class Countdown extends Component {
  constructor(props){
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {seconds: props.seconds}
  }

  // componentDidMount(){
  //   this.timer = setInterval(this.tick, 1000);
  // }

  tick(){
    if (this.state.seconds > 0) {
      this.setState({seconds: this.state.seconds - 1})
    } else {
      clearInterval(this.timer);
      window.location.reload();
    }
  }
  render(){
    return <div style={{width: "100%", textAlign: "center"}}>
      <h1>{this.state.seconds}...</h1>
    </div>
  }
}
  export default Countdown

    // constructor() {
    //   super();
    //   this.state = { time: {}, seconds: 5 };
    //   this.timer = 0;
    //   this.startTimer = this.startTimer.bind(this);
    //   this.countDown = this.countDown.bind(this);
    // }
  
    // secondsToTime(secs){
    //   let hours = Math.floor(secs / (60 * 60));
  
    //   let divisor_for_minutes = secs % (60 * 60);
    //   let minutes = Math.floor(divisor_for_minutes / 60);
  
    //   let divisor_for_seconds = divisor_for_minutes % 60;
    //   let seconds = Math.ceil(divisor_for_seconds);
  
    //   let obj = {
   
    //     "s": seconds
    //   };
    //   return obj;
    // }
  
    // componentDidMount() {
    // this.startTimer()

    // }
   
    // startTimer() {
    //     let timeLeftVar = this.secondsToTime(this.state.seconds);
    //     this.setState({ time: timeLeftVar });
    //   if (this.timer == 0 && this.state.seconds > 0) {
    //     this.timer = setInterval(this.countDown, 1000);
    //   }
    // }
  
    // countDown() {
    //   // Remove one second, set state so a re-render happens.
    //   let seconds = this.state.seconds - 1;
    //   this.setState({
    //     time: this.secondsToTime(seconds),
    //     seconds: seconds,
    //   });
      
      
    //   // Check if we're at zero.
    //   if (seconds == 0) { 
    //     clearInterval(this.timer);
    //   }
    // }
  
    // render() {
    //     const {style} = this.props;

    //   return(
    //     <div style={style}>
    //       {/* <button onClick={this.startTimer}>Start</button> */}
    //       {this.state.time.s}
    //     </div>
    //   );
    // }
  
  
