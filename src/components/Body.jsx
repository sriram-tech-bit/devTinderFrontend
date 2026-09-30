import React from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer } from './Footer'
import axios from 'axios'
import { Base_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

 const Body = () => {
  const user = useSelector((store) => store.User)
  let disapatch=useDispatch()
  let navigate=useNavigate()
let fetchUser= async()=>{
  try{
    
    let res= await axios.get(Base_URL+"/profile/view",{
  withCredentials:true

 })
 disapatch(addUser(res))  
  }
  catch(err){
    if(err.status===401){
      navigate("/login")
    }
  }
 
   
}

useEffect(()=>{
fetchUser();
},[])

  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default 
Body