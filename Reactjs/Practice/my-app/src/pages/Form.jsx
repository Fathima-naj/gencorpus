import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Form() {

  const navigate=useNavigate()
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
   

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

const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if(Object.keys(validationErrors).length > 0){
    setErrors(validationErrors);
  } else {
    console.log("Form Submitted");
    setFormData({
        name:"",
        email:"",
        password:""
    })
  }
};
  return (
    <div>
      
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" name='name' value={formData.name} className='border' placeholder='Name' onChange={handleChange} required/><br />
        <p className='text-red-600'>{errors.name}</p>
        <input type="email" name='email' value={formData.email} className='border' placeholder='Email' onChange={handleChange}/> <br />
        <p className='text-red-600'>{errors.email}</p>
        <input type="password"  name='password' value={formData.password} className='border' placeholder='Password' onChange={handleChange}/>
        <p className='text-red-600'>{errors.password}</p>
        {Object.keys(errors).length<0?<button type='submit' onClick={()=>navigate('/dashboard')}>Submit</button>:<button type='submit' disabled>Submit</button>}
      </form>
    </div>
  )
}

export default Form
