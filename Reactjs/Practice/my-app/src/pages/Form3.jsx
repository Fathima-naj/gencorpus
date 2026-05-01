import React, { useState } from 'react'

function Form3() {
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:""
    })

    const [error,setError]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target;
         setFormData({
            ...formData,
            [name]:value
         })
    }
    
    const validate = () => {
  let errors = {};

  // Regex for Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Required Field Validation
  if (!formData.username || formData.username.trim() === "") {
    errors.name = "Name is required";
  }

  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Email is required";
  } 
  else if (!emailRegex.test(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.password || formData.password.trim() === "") {
    errors.password = "Password is required";
  } 
  else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

    const handleSubmit=(e)=>{
        e.preventDefault();
        let validationerror=validate()

    if(Object.keys(validationerror).length>0){
        setError(validationerror)
    }else{
        console.log(formData)
        setFormData({
        username:"",
        email:"",
        password:""
        })
        setError({})
    }
    }
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <input type='text' className='border' name='username' value={formData.username} onChange={handleChange} required/>
        <p>{error.name?<p>{error.name}</p>:null}</p>
        <input type='email' className='border' name='email' value={formData.email} onChange={handleChange} required/>
         <p>{error.email?<p>{error.email}</p>:null}</p>
        <input type='password'className='border' name='password' value={formData.password} onChange={handleChange} required/>
         <p>{error.password?<p>{error.password}</p>:null}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form3
