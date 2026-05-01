import React from 'react'
import axios from 'axios'
function Fetch() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    const fetchUser=async()=>{
       let res= await axios.get("https://jsonplaceholder.typicode.com/users")
       console.log(res.data);
       
    }

    let user={
        name:"fathima",
        username:"Sara"
    }

   const createUser=async()=>{
    await axios.post("https://jsonplaceholder.typicode.com/users",user)
    console.log("new user created")
   }

   const updateUser=async()=>{
    let user={
        name:"Anu",
        email:"anu@gmail.com"
    }
     let updated=await axios.patch("https://jsonplaceholder.typicode.com/users/1",user)
     console.log(updated);
     
   }
  return (
    <div>
      <button onClick={fetchUser}>Get</button>
      <button onClick={createUser}>Add</button>
    <button onClick={updateUser}>Update</button>
    </div>
  )
}

export default Fetch
