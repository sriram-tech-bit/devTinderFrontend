import React, { useEffect } from 'react'
import { Base_URL } from '../utils/constants'
import axios from 'axios'
import { addFeed } from '../utils/FeedSlice'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
const Feed = () => {
let feed=useSelector((store)=>store.Feed)
 
   let disapatch=useDispatch();
  let FecthFeed= async()=>{
   try{
 let res=await axios.get(Base_URL+"/feed", {withCredentials:true})
   disapatch(addFeed(res.data.data))
 }
    
    catch(err){
}
}
 
 useEffect(()=>{
  FecthFeed();
 },[])
 if (!feed) return <p className="text-center m-7">Loading...</p>
if (feed.length === 0) return <h1 className="text-center m-7">No new users found</h1>


return  (
    <div> 
   <UserCard user={feed[0]}/>
    </div>
  )

}

export default Feed