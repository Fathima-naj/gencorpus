import React, { useState } from 'react'

function Form1() {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
 
    const [error,setError]=useState({})

    const handleChange=(e)=>{
          const {name,value}=e.target

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
  if (!formData.name || formData.name.trim() === "") {
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
      e.preventDefault()
      const validateError=validate()
     if(Object.keys(validateError).length>0){
        setError(validateError)
     }else{
        console.log("form submitted");
         setFormData({
        name:"",
        email:"",
        password:""
      })
     }
     
    }



  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <input type='text' placeholder='username' name='name' value={formData.name} onChange={handleChange} required/>
        {error.name && <p>{error.name}</p>}
        <input type='email' placeholder='email' name='email' value={formData.email} onChange={handleChange} required/>
        {error.email && <p>{error.email}</p>}
        <input type='password' placeholder='password' name='password' value={formData.password} onChange={handleChange} required/>
        {error.password && <p>{error.password}</p>} 
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form1
