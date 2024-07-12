import React, { Component } from 'react'
import HoverCounter from '../HoverCounter'
export class ClickCounter extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      
        <button onClick={incrementCount}>{count}</button>

      
    )
  }
}

export default HoverCounter(ClickCounter)