import React, { useState } from 'react'

const RegistrationForm = () => {
    const [val,setVal]=useState({name:'',email:'',password:''})
    const [errors,setErrors]=useState({})
    const handleSubmit=(e)=>{
        e.preventDefault()
        const validation=validate()
        setErrors(validation)
        const erLen=Object.keys(errors).length
        if(erLen===0){
            console.log("Success")
        }
        else{
            console.log("Error")
        }

        
    }
    const validate=()=>{
        setErrors({})
        const errors={}
        if (!val.name) {errors.name = 'Name is required';}
        if (!val.email) {errors.email = 'Email is required';}
        else if (!/\S+@\S+\.\S+/.test(val.email)) {errors.email = 'Email is invalid';}
        if (!val.password){ errors.password = 'Password is required';}
        else if (val.password.length < 6){ errors.password = 'Password must be at least 6 characters';}
        return errors;
    }

  return (
    <div style={{display:'flex',justifyContent:'center',alignContent:'center',height:'100vh'}} >
        <form className='form' onSubmit={handleSubmit} >
        <div className='form-child'>
            <div style={{marginRight:'32px'}}><label>Name </label></div>
            <div><input type='text' value={val.name} id="name" name="name" onChange={(e)=>setVal({...val,name:e.target.value})} /></div>

        </div>
        <div>{errors.name}</div>

        <div className='form-child'> 
            <div style={{marginRight:'34px'}}   ><label>Email </label></div>
            <div><input type='email' value={val.email} id="email" name="email" onChange={(e)=>setVal({...val,email:e.target.value})} /></div>

        </div>
        <div>{errors.email}</div>

        <div className='form-child'>
            <div style={{marginRight:'4px'}}><label>Password </label></div>
            <div><input type='password' value={val.password} id="password" name="password" onChange={(e)=>setVal({...val,password:e.target.value})}  /></div>

        </div>
        <div>{errors.password}</div>

        <div><button type='submit' >Submit</button></div>
        </form>
        {/* <p>{val}</p> */}

    </div>
  )
}

export default RegistrationForm