import React, { useEffect, useState, useRef } from 'react'
import {useParams} from "react-router-dom"
import {creatSocketConnection}  from "../utils/socket"
import {useSelector} from "react-redux"

const Chat = () => {

let user=useSelector((store)=>store.User)
 let {touserId}=useParams();
 let [newMessages,setNewMessages]=useState("");    
 let [messages,setMessages]=useState([]);          
 let socketRef = useRef(null);                    

 const userId = user?._id

 useEffect(()=>{
    if (!userId) return;                           
    let io=creatSocketConnection();
    socketRef.current = io;                        
    io.emit("joinChat",{touserId,userId});
    io.on("messageReceived",({firstName, text})=>{
    setMessages((prev) => [...prev, { firstName, text }]);
})
    return()=>{
        io.disconnect();
    }
 },[touserId,userId])
 if (!userId) return null
 let sendMessages=()=>{
    if (!newMessages.trim()) return;
    socketRef.current.emit("sendMessages",{        
     firstName:user.firstName,
     userId,
     touserId,
     text:newMessages
    })
    setNewMessages("");                           
 }

  return (
    <div className="w-full max-w-2xl mx-auto h-[70vh] flex flex-col border border-gray-600 m-5">

      <div className="flex-1 overflow-y-auto p-5">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={"chat " + (msg.firstName === user.firstName ? "chat-end" : "chat-start")}
    >
      <div className="chat-header">
        {msg.firstName}
        <time className="text-xs opacity-50"> just now</time>
      </div>
      <div className="chat-bubble">{msg.text}</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  ))}
</div>

      <div className="flex items-center gap-6 shadow bg-base-200 p-4">
        <input type="text" placeholder="Type a message..." className="input input-bordered flex-1"
          value={newMessages}                      
          onChange={(e)=>{
            setNewMessages(e.target.value)       
        }}/>
        <button className="btn btn-primary" onClick={()=>sendMessages()}>Send</button>
      </div>

    </div>
  )
}

export default Chat