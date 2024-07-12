import React from 'react'
import { useState } from 'react'

function FilterData({data}) {
    const[result,setResults]=useState([...data])
    const funChange=(e)=>{
        const value=e.target.value
       const newData=result.filter((ele)=>{
        
    
           return ele.toLowerCase().includes(value.toLowerCase())
       
       })
       setResults(newData)

    }
  return (
    <div>
        <p><b>search</b><input type='text'onChange={funChange}></input></p>
        {
        result.map((ele,ind)=>{
            return(
                <li key={ind}>{ele}</li>
            )
        })}
    </div>
  )

}

export default FilterData;