import React from 'react'

function TabelCom(props){
    const {headers,data,columns}=props

  return (
<table border='2px'>
    <thead>
        <tr>
            {
                headers.map((ele,ind)=>{
                    return(
                        <th key={ind}>{ele}</th>
                    )
                })
            }
            
        </tr>
      
        
    </thead>
    <tbody>
        {
            data.map((ele,ind)=>{
                return(
                    <tr>
                        {
                            columns.map((ele1,ind1)=>{
                                return(
                                    <td key={ind1}>{ele[ele1]}</td>
                                )
                            })
                            
                        }
                    </tr>
                )
            })
        }
    </tbody>
</table>
  )
}

export default TabelCom