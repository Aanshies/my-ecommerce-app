import React, { useState, useContext } from 'react'; // 1. Add useContext
import { Link, useNavigate } from 'react-router-dom'; // 2. Add useNavigate
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx'; // 3. Import AuthContext

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext); // 4. Get the login function
  const navigate = useNavigate(); // 5. Initialize navigate


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://my-ecommerce-app-backend-4z69.onrender.com/api/users/login', {
        email,
        password,
      });
      login(data.token); // 6. Use the context's login function
      setMessage('Login successful!');
      navigate('/'); // 7. Redirect to homepage
    } catch (error) {
      setMessage('Error: Invalid credentials.');
      console.error(error);
    }
  };


  return (
    <div className="form-container">
      <h1>Login</h1>
      {message && <p>{message}</p>}
      <form onSubmit={submitHandler}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        New Customer? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
