import React, { useEffect,useState } from 'react'

function Effect() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("ui rendered...")
    },[count])

    const increment=()=>{
        setCount(count+1)
    }
    
  return (
    <div>
      <button onClick={increment} className='bg-amber-300'>Count ={count}</button>
    </div>
  )
}

export default Effect
