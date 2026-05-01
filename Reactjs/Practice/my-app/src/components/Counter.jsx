import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    // const[user,setUser]=useState({
    //     name:"",
    //     age:0
    // })
    const handleClick=()=>{
        setCount(prev=>prev+1)
        // setUser({...user,name:"Fathima",age:20})
    }
  return (
    <div>
        {/* <h2>Name:{user.name}</h2>
        <p>Age:{user.age}</p> */}
      <button onClick={handleClick} className='bg-amber-200 border p-3'>count = {count}</button>
    </div>
  )
}

export default Counter
