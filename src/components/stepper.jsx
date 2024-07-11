import React, { useState } from 'react'

const CheckoutStepper=({stepsConfig=[]})=>{
  const[currentstep,setCurrentstep]=useState(1)
  const[iscompleted,setiscompleted]=useState(false)
  console.log(stepsConfig)
  const ActiveComponent=stepsConfig[currentstep-1]?.Component;
  const handelnext=()=>{
    setCurrentstep((prev)=>{
      if(prev<stepsConfig.length){
        return prev+1
      }
      setiscompleted(true)

    })
    

  }
  const calculateProgressBarWidth=()=>{
    return((currentstep-1)/(stepsConfig.length -1))*100
  }
  

  if (!stepsConfig.length){
    return <> </>
  }
  return (
    <>
    <div className='stepper'>
      {
        stepsConfig.map((step,ind)=>{
          return( <div key={step.name} className={`step 
          ${currentstep>ind+1 || iscompleted ?"completed":""}
            ${currentstep==ind+1?"active":""}`}>
            <div className='step-number'>{
              currentstep>ind+1 || iscompleted ?<span>&#10003;</span>
              : ind+1}</div>
            <div className='step-name'>{step.name}</div>
          </div>
          )
        })

      }

      <div className='progress-bar'>
        <div className='progress' style={{
          width:`${calculateProgressBarWidth()}%`
        }}></div>
      </div>
    </div>
    <ActiveComponent/>
    {!iscompleted&&(
    <button onClick={handelnext} >{currentstep===stepsConfig.length?"Finish":"next"}</button>)}
    </>
  )
}

export default CheckoutStepper