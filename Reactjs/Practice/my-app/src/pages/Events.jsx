import React, { useRef, useState } from 'react'

function Events() {
    const [name,setName]=useState("")
    const inputRef=useRef();
    const handleClick=(e)=>{
     console.log(e);
     
    }
    const handleChange=(e)=>{
        console.log(e);
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Form Submitted :"+name);
      
    }
    const handleInput=()=>{
        inputRef.current.focus();
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
         
      <br />
      <input type='text' className='border' onChange={handleChange}/>
      <h2>{name}</h2>
      <input className='border'  ref={inputRef}/>
      <button onClick={handleInput}>ref</button><br />
      <button onClick={handleClick} type='submit'> Click</button>
     </form>
    </div>
  )
}

export default Events
