import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Sign in to your account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <span className="icon">@</span>
        </div>
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <span className="icon">👁</span>
        </div>
        <button type="submit" className="login-button">SIGN IN</button>
      </form>
    </div>
  );
}

export default Login;