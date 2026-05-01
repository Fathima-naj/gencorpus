import React, { useState } from 'react'

function Toggle() {
    const [toggle,setToggle]=useState(false)
    const toggler=()=>{
        setToggle(prev=>!prev)
    }
  return (
    <div>
        <p>{toggle?"ON":"OFF"}</p>
      <buton onClick={toggler}>{toggle?"Turn OFF":"Turn ON"}</buton>
    </div>
  )
}

export default Toggle
