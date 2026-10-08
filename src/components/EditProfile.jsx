import React, { useState } from 'react'
import { useEffect } from 'react'
import ProfileCard from './ProfileCard'
import { Base_URL } from '../utils/constants'
import axios from 'axios'
const EditProfile = ({user}) => {
  console.log(user);
const [firstName,setFirstName]=useState(user.firstName)
const [lastName,setLastName]=useState(user.lastName)
const [photoUrl,setPhotoUrl]=useState(user.photoUrl)
const [age,setAge]=useState(user.age)
const [about,setAbout]=useState(user.about)
const [gender,setGender]=useState(user.gender)
const [err,setError]=useState("")
const [toast,setToast]=useState(false);
  let handeleProfileEdit=async()=>{
    setError(" ")
    try{
   let res= await axios.patch(Base_URL+"/profile/edit",{
   firstName,lastName,age,photoUrl,gender,about
 },{withCredentials:true})
 setToast(true)
 setTimeout(() => {
    setToast(false)
 }, 3000);

}

catch(err){
 setError(err?.response?.data?.message || err.message)
}
}
    
return (
    <div className='flex'>

      { toast&&<div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>{user.firstName} your profile udated successfully</span>
  </div>
  
</div>}
    <div className='m-2'>
    
     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  

  <label className="label">firstName</label>
  <input type="text" className="input" placeholder="firstName" onChange={(e)=>{
      setFirstName(e.target.value)
  }} />

  <label className="label">lastName</label>
  <input type="text" className="input" placeholder="lastName" onChange={(e)=>{
    setLastName(e.target.value)
  }} />

  <label className="label">age</label>
<input type="number" className="input" placeholder="age"  onChange={(e)=>{
     setAge(e.target.value)
}}/>

  <label className="label">gender</label>
  <input type="text" className="input" placeholder="gender" onChange={(e)=>{
    setGender(e.target.value)
  }} />

  <label className="label">photoUrl</label>
  <input type="url" className="input" placeholder="photoUrl"  onChange={(e)=>{
    setPhotoUrl(e.target.value)
  }}/>

  <label className="label">About</label>
  <input type="text" className="input" placeholder="about"  onChange={(e)=>{
    setAbout(e.target.value)
  }}/>
 <p className='text-red-800'>{err}</p>
  <button className="btn btn-neutral mt-4" onClick={()=>handeleProfileEdit()}>saveProfile</button>
</fieldset> 

  
    </div>
    <ProfileCard user={{firstName,lastName,age,gender,photoUrl,about}}/>
    </div>
  )
}

export default EditProfile