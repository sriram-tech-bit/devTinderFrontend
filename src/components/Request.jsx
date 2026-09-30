import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'
import { removeRequest } from '../utils/requestSlice'
const Request = () => {
let disapatch=useDispatch()
let handlebutton=async(status,id)=>{
  let res=await axios.post(`${Base_URL}/request/review/${status}/${id}`,{},{withCredentials:true})
   disapatch(removeRequest(id))
}

let Request=useSelector((store)=>store.Request)
let fetchRequests=async()=>{
let res=await axios.get(Base_URL+"/user/requests/received",{withCredentials:true})
disapatch(addRequest(res.data.data))

}
useEffect(()=>{
 fetchRequests()
},[])
if(!Request) return null
if(Request.length==0){
    return <h1>no request found</h1>
}

  return (
    <div>
{Request.map((request)=>(
    
     <div key={request._id} className='flex items-center gap-6 shadow rounded-box bg-base-200 p-4 m-4  w-fit mx-auto'>

    <img className='w-23 h-23  rounded-full' src={request.fromUserId.photoUrl}/> 
    <div className='mx-56'>
    <h1>{request.fromUserId.firstName+ " "+request.fromUserId.lastName}</h1>
    <h1>{request.fromUserId.gender}</h1>
    <button className="btn btn-soft btn-error" onClick={()=>handlebutton("rejected",request._id)}>rejected</button>
    <button className="btn btn-soft btn-success m-1"onClick={()=>handlebutton("accepted",request._id)}>accepted</button>
    </div>
    </div>
       

))}




    </div>
  )
}

export default Request