import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Dashboard() {
  return (
    <div>
        
      Dashboard
       <Link to='/dashboard/profile'>profile</Link>
      <Outlet/>
    </div>
  )
}

export default Dashboard
