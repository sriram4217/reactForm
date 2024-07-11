import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Add from './components/Add'
import AddItem from './components/AddItem'
import FilterData from './components/FilterData'
import Tabel from './TabelPratice/Tabel'
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
  const [count, setCount] = useState(0)

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
