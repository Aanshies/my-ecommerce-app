import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://my-ecommerce-app-backend-4z69.onrender.com/api/users/register', {
        name,
        email,
        password,
      });
      setMessage('Registration successful! You can now log in.');
    } catch (error) {
      setMessage('Error: User may already exist or invalid data.');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      {message && <p>{message}</p>}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Have an Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
