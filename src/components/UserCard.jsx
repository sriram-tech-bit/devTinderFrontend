import axios from 'axios'
import React from 'react'
import { Base_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { removeFeed } from '../utils/FeedSlice'

const UserCard = ({user}) => {
    if (!user) return null
    let feed=useSelector((store)=>store.Feed)
    let disapatch=useDispatch()

    let handleRequest=async(status,id)=>{
       try{
      let res=await axios.post(Base_URL+"/request/send/"+status+"/"+id,{},{withCredentials:true})
        disapatch(removeFeed(_id))
       } 
       
       catch(err){

       }
    }
   const {_id,firstName,lastName,age,gender,about,photoUrl}=user;
  return (
    <div className='flex justify-center m-4'>
  <div className="card bg-base-100 w-66 shadow-sm ">
  <figure className="px-10 pt-10">
    <img
      src={photoUrl}
      alt="userPhoto"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="name text-3xl">{firstName+" "+lastName}</h2>
    <h3>{about}</h3>
    <p>{gender}</p>
    
    <div className="card-actions">
      <button className="btn btn-success" onClick={()=>{handleRequest("intrested",_id)}}>intrested</button>
      <button className="btn btn-error"onClick={()=>{handleRequest("ignored",_id)}}>ignore</button>
    </div>
  </div>
</div>





    </div>
  )
}

export default UserCard