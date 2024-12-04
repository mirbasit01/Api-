// Fach Api 
import React, { useState } from 'react';

import APIUrl from '../utils/Environment';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  
  let LoginForm =  APIUrl.LoginPost



  

  const handleLogin = async (e) => {
    e.preventDefault(); // Page reload hone se rokta hai
    setError('');
    setSuccess('');
     
    try {
      const response = await fetch( `${LoginForm}/auth/signin`,{
        method: 'POST', // API ke liye POST request
        headers: {
          'Content-Type': 'application/json', // JSON format use kar rahe hain
        },
        body: JSON.stringify({ email, password }), // Email aur password bhejna
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful!'); // Login success message
        console.log('User Data:', data); // Backend se received data
      } else {
        setError(data.message || 'Invalid email or password!'); // Error message
      }
    } catch (err) {
      setError('Something went wrong!'); // Network ya server error
    }
  };

  return (
    <div >
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;