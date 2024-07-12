import { Component, useState } from 'react'
import './App.css'
import CheckoutStepper from './components/stepper'

const CHECK_OUT_STEPS=[
  {
    name:"CUSTOMER INFORAMTION",
    Component:()=><div> Provided your information</div>,
  },{
    name:"Shipping info",
    Component:()=><div>enter your shipping address</div>,
  },
  {
    name:"Payment info",
    Component:()=><div>enter your payment info</div>,
  },{
    name:"Delivered",
    Component:()=><div>your order is delivered</div>
  }
];
function App() {
  
  return (
    
//  <Form/>
<div>
     {/* {/* <Add/>
     <AddItem/>
     */}
     {/* <Table/>  */}
     {/* <HoverCounter/> */}
     {/* <Tabel/> */}
     <h2>checkout</h2>
      <CheckoutStepper stepsConfig={CHECK_OUT_STEPS} />
     
    
</div>

     
    
  )
}

export default App
