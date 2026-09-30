import React from 'react'

const ProfileCard = ({user}) => {
 if (!user) return null
   const {firstName,lastName,age,gender,about,photoUrl}=user;
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
    <h2 className="name text-2xl">{firstName+" "+lastName}</h2>
    <h3>{about}</h3>
    <p>{gender}</p>
    </div>
   </div>
   </div>
  )
  
}

export default ProfileCard