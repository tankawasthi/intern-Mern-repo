import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function Collage() {
  return (
    <div className="collage"style={{textAlign:"center"}}>
        <h1>Collage Page</h1>
        <h3><Link to="/">go back to home </Link></h3>
        <Link className="link" to="/collage/students">Students</Link>
        <NavLink className="link" to="/collage/departments">Departments</NavLink>
        <NavLink className="link" to="/collage/collagedetails">Collage Details</NavLink>
        <Outlet/>

    </div>
  )
}

export default Collage