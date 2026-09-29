import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
 import { addUser } from '../utils/userSlice'
 import { Base_URL } from '../utils/constants'
const Login= () => {
  const [emailId,setEmail]=useState("")
  const [passWord,setPassWord]=useState("")
  let disapatch=useDispatch();
 
  let handleLogin=async()=>{
     try{
        let res= await axios.post(
         Base_URL+"/login",
         {
          emailId,
          passWord
  
         },
         {withCredentials:true}

        )
        disapatch(addUser(res))
     }
     catch(err){
    console.log(err)
     }
  }
  return (
    <div className='flex justify-center m-7'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email"  onChange={(e)=>{
          setEmail(e.target.value)
  }}/>

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password"  onChange={(e)=>{
        setPassWord(e.target.value)
  }}/>

  <button className="btn btn-neutral mt-4" onClick={()=>handleLogin()}>Login</button>
</fieldset>

    </div>
  )
}

export default  Login


