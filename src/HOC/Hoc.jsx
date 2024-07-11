import React from 'react'

const UpdatedComponent=(OrignialComp)=>{
  class NewComponent extends React.Component{
    constructor(props){
      super(props)
      this.state={
          count:0
      }
  }
  incrementCount=()=>{
      this.setState(pre=>{
          return{count:pre.count+1}
      })
  }
    render(){
      return <OrignialComp count={this.state.count} incrementCount={this.incrementCount}/>
    }
   
  }
  return NewComponent;
}

export default UpdatedComponent;