// write the component code here
// write the component code here
import React from 'react'

const usercard = () => {

    const profilePhoto = "https://i.pinimg.com/474x/04/c2/a6/04c2a61d6837d23044da021ba7a13bcb.jpg"; 
    const name = "Rohitha";
    const email = "rohitha22@gmail.com" ;
    const phoneNumber = "9494578519";
    const address = "Rajamundry";
  return (
    <div>
      <img src={profilePhoto} alt="Image" />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{address}</p>
    </div>
  )
}

export default usercard
