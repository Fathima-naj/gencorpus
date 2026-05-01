import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav class="flex justify-between items-center bg-blue-500 text-white p-4">

  <h1 class="text-xl font-bold">MyApp</h1>

  <div class="space-x-4">
    <Link to='/'>Home</Link>
    <Link to='/form'>Form</Link>
    <Link to='/user/1'>User</Link>
    <NavLink to='/dashboard'
    style={({isActive})=>({
      color:isActive?'red':'black'
    })}
    >Dashboard</NavLink>
  </div>

</nav>
    </div>
  )
}

export default Navbar
