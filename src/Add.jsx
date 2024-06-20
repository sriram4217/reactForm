import React, { useState } from 'react'

function Add() {
    const[result,setresult]=useState()
    
    const [data,setdata]=useState({
        n1:'',
        n2:'',
    });
    const [clr,setclr]=useState('')
    const fnchange=(e)=>{
       const {value,id}=e.target
       setdata({...data,[id]:value})
      
       
    }
    const funclick=()=>{
        if (data.n1 && data.n2 ){
            const sum=parseInt(data.n1)+parseInt(data.n2)
            // sum=data.n1+data.n2
            setresult(sum)
            setclr('green')
        }
        else{
            setresult(()=>{
                if(!data.n1){
                    return 'enter no1'
                }
                else if(!data.n2){
                    return 'enter no2'
                }
            })
            setclr('red')
        }
        
    }



  return (
    <div>
        {(data.n1 && data.n2) ? <h1>Adding {data.n1} and {data.n2}</h1> : null}

        <p>
            <b>NO:1</b><input
            type="number"
            id="n1"
            onChange={fnchange}

            
          />
            <b>NO:2</b><input
            type="number"
            id="n2"
            onChange={fnchange}

            
          />
        </p>
        <button onClick={funclick}>submit</button>
        <h1 style={{
            color:clr
        }}>{result}</h1>

    </div>
  )
}

export default Add