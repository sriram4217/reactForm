import React, { Component } from 'react'
import UpdatedComponent from './Hoc'

class HoverCounter extends Component {
    
  render() {
    const{count,incrementCount}=this.props
    return (
      <h2 onMouseOver={incrementCount}>
        {count}

      </h2>
    )
  }
}
export default UpdatedComponent(HoverCounter)