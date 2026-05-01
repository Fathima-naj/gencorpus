import React from 'react'
import axios from "axios"

function Axios() {
 const fetchUser=async()=>{
   try {
     let res=await axios.get("https://jsonplaceholder.typicodeinvalid.com/users")
    console.log(res.data);
   } catch (error) {
    console.log(error)
   }
 }
const addUser=async()=>{
    let user={name:"Naja",username:"fathima"}
    await axios.post("https://jsonplaceholder.typicode.com/users",user)
    console.log("user added");
}

const updateUser=async()=>{
    let user={name:"sara",username:"sara john"}
    let res=await axios.patch("https://jsonplaceholder.typicode.com/users/1",user);
    console.log("res",res);
}

const deleteUser=async()=>{
    await axios.delete("https://jsonplaceholder.typicode.com/users/1")
    console.log("deleted")
}

  return (
    <div>
      <button className='border' onClick={fetchUser}>Fetch</button>
      <button className='border' onClick={addUser}>Add</button>
      <button className='border' onClick={updateUser}>Update</button>
      <button className='border' onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default Axios
