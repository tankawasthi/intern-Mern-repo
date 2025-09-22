import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function UserDetail() {
    const parmData=useParams()
    console.log(parmData);
  return (
    <div>
        <div>UserDetail</div>
        <p>user id is : {parmData.id}</p>
        <p>user name is : {parmData.name}</p>
        <p>user age is : {parmData.age}</p>
        <p>user city is : {parmData.city}</p>

        <button onClick={<Link to="/user"/>}>back to users</button>

    </div>
    
  )
}

export default UserDetail