// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/RreLog.css'

const LoginPage = () => {
  const [formData, setFormData] = useState({
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
    // Send login data to the server
    try {
      const response = await axios.post('http://localhost:4000/login', formData); // Send registration data to the server
      console.log(response.data); // Log response data
      history.push('/home');
    } catch (error) {
      console.error('Registration failed:', error);
    }

    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
        <p>Create Account? <Link to="/register">Sigup</Link></p>
        <p>Forgot Password? <Link to="/reset">Reset</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;
