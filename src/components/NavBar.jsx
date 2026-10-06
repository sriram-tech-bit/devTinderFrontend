import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Base_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
const NavBar = () => {
  let navigate=useNavigate()
  let disapatch=useDispatch()
  let user=useSelector((store)=>store.User)
 let handleLogOut=async()=>{
  try{
    let res=await axios.post(Base_URL+"/logOut",{

    },{withCredentials:true})
    disapatch(removeUser())
    navigate("/login")
  }
  catch(err){

  }
    
 }
  return (
    <div>
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">devTinder</a>
  </div>
  <div className="flex gap-2">
   
    <div className="dropdown dropdown-end">

      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       
         { user &&<div className="w-10 rounded-full">
         
        <img 
            alt="Tailwind CSS Navbar component"
            src={user.data.photoUrl}/>
        </div>}
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile">
            Profile
             <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
         <li><Link to="/connections">connections</Link></li>
         <li><Link to="/requests">requests</Link></li>
        <li><Link to="/premium">premium</Link></li>
        <li onClick={()=>handleLogOut()}><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default NavBar