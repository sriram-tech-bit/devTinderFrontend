import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_URL } from '../utils/constants'
import EditProfile from './EditProfile'

import { useSelector } from 'react-redux'
const Profile = () => {
let user=useSelector((store)=>store.User)
  return (
    <div className='flex justify-center'>
  {user&&<EditProfile user={user.data}/>}

  </div>
  )
}

export default Profile