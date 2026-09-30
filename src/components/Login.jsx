import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
 import { addUser } from '../utils/userSlice'
 import { Base_URL } from '../utils/constants'
 import { Navigate, useNavigate } from 'react-router-dom'
const Login= () => {
  const [emailId,setEmail]=useState("")
  const [passWord,setPassWord]=useState("")
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [gender,setGender]=useState("")

  const [err,setError]=useState("")
  const[islogin,setIsLogin]=useState(true)
  let disapatch=useDispatch();
  let navigate=useNavigate();
  let  handleSignUp=async()=>{
    setError("")
    try{
      let res=await axios.post(Base_URL+"/signUp",{
      firstName,lastName,gender,emailId,passWord
    },{withCredentials:true})
      disapatch(addUser(res))
      navigate("/profile")
    }
    catch(err){
       setError(err?.response?.data || "Something went wrong")
    }
    
  }
 
  let handleLogin=async()=>{
    setError("")
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
       navigate("/")
     }
     catch(err){
   setError(err?.response?.data || "Something went wrong")
     }
  }
  return (
    <div className='flex justify-center m-7'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  
  {
   !islogin&& <><label className="label">FirstName</label>
  <input type="text" className="input" placeholder="FirstName"  onChange={(e)=>{
          setFirstName(e.target.value)
  }}/>

  <label className="label">LastName</label>
  <input type="text" className="input" placeholder="LastName"  onChange={(e)=>{
        setLastName(e.target.value)
  }}/>

  <label className="label">gender</label>
  <input type="text" className="input" placeholder="Gender"  onChange={(e)=>{
          setGender(e.target.value)
  }}/>
 </> }

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="email"  onChange={(e)=>{
          setEmail(e.target.value)
  }}/>

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password"  onChange={(e)=>{
        setPassWord(e.target.value)
  }}/>


  
  <p className='text-red-600'>{err}</p>
<p onClick={()=>setIsLogin(!islogin)}>{islogin?"New user signup":"ExsitingUserLogin"}</p>

  <button className="btn btn-neutral mt-4" onClick={()=>{islogin?handleLogin():handleSignUp()}}>{islogin?"login":"signUP"}</button>
</fieldset>

    </div>
  )
}

export default  Login


