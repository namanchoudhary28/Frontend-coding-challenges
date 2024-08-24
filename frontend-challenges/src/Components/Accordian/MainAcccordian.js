import React, { useState } from 'react'
import questions from '../../assests/data'
import Accordian from './Accordian'
const MainAcccordian = () => {
    const [gid,setGid]=useState(null)

  return (
    <div className='star-main'>
        <div className='accordian-div'>
            {
                questions.map((item,index)=>{
                    return <Accordian fun={setGid} funId={gid} key={item.id} id={item.id} title={item.title} info={item.info} />
                })
            }
        </div>
    </div>
  )
}

export default MainAcccordian