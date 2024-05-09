// RegistrationPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import { useHistory } from 'react-router-dom';

import axios from 'axios';
import '../css/RreLog.css'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    password: ''
  });
  const history=useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Send registration data to the server
    try {
      const response = await axios.post('http://localhost:4000/register', formData); // Send registration data to the server
      console.log(response.data); // Log response data
      history.push('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      
    </div>
  );
};

export default RegistrationPage;
