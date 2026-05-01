import React, { useState } from 'react'

function Theme() {
    const [bg,setBg]=useState(false)
    const themeSwitch=()=>{
        setBg(prev=>!prev)
    }

  return (
    <div style={{background:bg?"black":"white",height:"100vh"}}>
      <button onClick={themeSwitch} className='bg-amber-600 p-2'>{bg?"Light Mode":"Dark mode"}</button>
    </div>
  )
}

export default Theme
