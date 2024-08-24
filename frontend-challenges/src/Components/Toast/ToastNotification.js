import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Toast from './Toast';


const ToastNotification = () => {
    const [cont,setCont]=useState([])
const submit=(val)=>{
    const id = Date.now();
    setCont([...cont,{id:id,variant:val,name:val}])
    setTimeout(() => {
        setCont(cont.filter(item => item.id !== id));

        // setCont((prevButtons) => prevButtons.filter(buttonId => buttonId.id !== id));
      }, 4000);
}

  return (
    <div className='main-toast'>
       <div className='toaDiv'>
        {
            cont.map((item,index)=>{
                return <Toast key={item.id} variant={item.variant} name={item.name} />
            })
        }
       </div>
        <div className='toast-div'>

        <Button variant="success"style={{ width: '200px' }} onClick={()=>submit("success")}>Success</Button>

        <Button variant="info" style={{ width: '200px' }} onClick={()=>submit("info")}>Info</Button>
      <Button variant="warning" style={{ width: '200px' }} onClick={()=>submit("warning")}>Warning</Button>
      <Button variant="danger" style={{ width: '200px' }} onClick={()=>submit("danger")}>Error</Button>


        </div>



    </div>
  )
}

export default ToastNotification