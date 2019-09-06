import TimerDisplay from './index'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import TenSecond from '../TenSec'

class TestComponent extends Component {

  render () {
    /* delay is just the delay on showing the update of the timer */
    let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
    return (
      <div>
      {/* <TenSecond options={OPTIONS} /> */}

        <TimerDisplay options={OPTIONS} />
      </div>
    )
  }
}

export default TestComponent