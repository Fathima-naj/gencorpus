import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CounterApp() {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(prev=>prev+1)
    }
    const decrement=()=>{
        setCount(prev=>prev-1)
    }
   const reset=()=>{
    setCount(0)
   }
  return (
    <div>

 

        <h2>count={count}</h2>
      <button onClick={increment} className='bg-gray-400 p-2'>Increase</button><br />
      <button onClick={decrement} className='bg-red-300 p-2'>Decrease</button><br />
      <button onClick={reset} className='bg-amber-200 p-2'>Reset</button><br />
    </div>
  )
}

export default CounterApp
