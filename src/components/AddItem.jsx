import React, { useEffect, useState } from 'react'
import FilterData from './FilterData'
import { useMemo } from 'react'

function AddItem() {
  const [data,setdata]=useState([])
  const[name,setname]=useState('')
  const fnchange=(e)=>{
    setname(e.target.value)
  }
  const funclick=(e)=>{
    
    if(!data.includes(name)){
      setdata([...data,name])
      setname('')

    }


  }
 
  return (
    <div>
      <p>
      <b> enter the check list </b>
      <input type="text" onChange={fnchange} value={name}/>
      <button onClick={funclick}>add</button>
      </p>
      <ol>
        {
          data.map((ele,index)=>{
            return(
            <div key={index}>
            <li>{ele}</li>
            {index > 0 && (
                <button type="button" onClick={() =>{
                  const newdata=[...data]
                  newdata.splice(index,1)
                  setdata(newdata)
                }}>
                  Remove
                </button>
              )}
            </div>)

          })
        }
      </ol>
      <div></div>
      <FilterData d1={data}/>
  

    </div>
  )
}

export default AddItem;