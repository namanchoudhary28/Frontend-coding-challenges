import React, { useState } from 'react'

const Todo = () => {
    const [val,setVal]=useState('')
    const [data,setData]=useState([])
    const handleAdd=()=>{
        console.log(val)
        setData([...data,val])
        setVal('')
    }
    const handleRemove=(ind)=>{
        console.log(ind)
        const newAr=data.filter((item,index)=>{
            return index !==ind
        })
        setData(newAr)

    }
  return (
    <div>
        <h1>Todo Name</h1>
        <input type='text' name='name' id="name" value={val} onChange={(e)=>setVal(e.target.value)} />
        <button onClick={handleAdd}>Add todo</button>
        <br />
        <h1>List</h1><br />
        {
            data.map((item,index)=>{
                return <div key={index} >
                    <div>{item} <button onClick={()=>handleRemove(index)}>Remove</button></div> <br />
                </div>
            })
        }
    </div>
  )
}

export default Todo