// SendMailForm.js
import React, { useState } from 'react';
import '../css/Style.css';
import NavigationBar from './NavigationBar';

function SendMailForm() {
  const [formData, setFormData] = useState({
    to: '',
    from: '',
    subject: '',
    startDate: '',
    endDate: '',
    name: '',
    mobileNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to backend)
    console.log(formData);
  };

  return (
    <div>
      <NavigationBar/>
      <form onSubmit={handleSubmit}>
        <input type="email" name="to" value={formData.to} onChange={handleChange} placeholder="To" required />
        <input type="email" name="from" value={formData.from} onChange={handleChange} placeholder="From" required />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" required />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" required />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Send Mail</button>
      </form>
    </div>
  );
}

export default SendMailForm;
