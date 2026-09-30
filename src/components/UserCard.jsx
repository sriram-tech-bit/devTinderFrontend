import React from 'react'

const UserCard = ({user}) => {
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
    <h2 className="name text-3xl">{firstName+" "+lastName}</h2>
    <h3>{about}</h3>
    <p>{gender}</p>
    
    <div className="card-actions">
      <button className="btn btn-success">intrested</button>
      <button className="btn btn-error">ignore</button>
    </div>
  </div>
</div>





    </div>
  )
}

export default UserCard