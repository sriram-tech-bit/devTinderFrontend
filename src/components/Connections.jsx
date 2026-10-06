import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_URL } from '../utils/constants'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import { Link } from 'react-router-dom'
const Connections = () => {
let disapatch=useDispatch();
let Connections=useSelector((store)=>store.Connections)
let fetchConnections=async()=>{
let res=await axios.get(Base_URL+"/user/connections",{withCredentials:true})
disapatch(addConnections(res.data.data))

}
useEffect(()=>{
  fetchConnections();
},[])

if(!Connections) return 
if(Connections.length===0)return <h1 className="text-center m-7">No connections found</h1>
 return (
  <div>
    {Connections.map((connections) => (
      <div key={connections._id} className='flex items-center gap-6 shadow rounded-box bg-base-200 p-4 m-4  w-fit mx-auto'>

        <img className='w-23 h-23  rounded-full' src={connections.photoUrl}/>
        <div className='mx-56'>
          <h1>{connections.firstName+ " "+ connections.lastName}</h1>
          <h1>{connections.gender}</h1>
        </div>
        <Link to={`/chat/${connections._id}`}>
          <button className="btn btn-primary">Chat</button>
        </Link>

      </div>
   
    ))}

    
  </div>
);
  
}

export default Connections