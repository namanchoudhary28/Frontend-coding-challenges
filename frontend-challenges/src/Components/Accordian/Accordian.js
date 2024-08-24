import React, { useState } from 'react'

const Accordian = ({id,title,info,fun,funId}) => {
    const [flag,setFlag]=useState(false)
  return (
    <div className='main-div-accord'>

    <div className='accord'>
        <div className='title'>{title}</div>
        <div className='add-icon' onClick={()=>fun(id)}>+</div>
    </div>
    {
        (funId==id) && <div className='accord para'>{info}</div>
    }
    </div>
  )
}

export default Accordian