// StudentApp1/src/StudentForm.js

import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
