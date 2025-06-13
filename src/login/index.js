import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import logo from "../assets/lv-logo-white.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock login logic
    if (email === 'admin@example.com' && password === '123456') {
      alert('Login successful!');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
        <div className="login-wrapper">
      <div className="login-content">
        <img src={logo} alt="LatentView" className="lv-logo" />
        <div className="heading">
          {/* <h1>Internal <span>Solution</span> <span className="hub">Hub</span></h1> */}
          <div className="text-left">
  <p>Discover, Manage and Track</p>
  <p className="ml-10">all your software assets</p>
  <p className="ml-20">from anywhere</p>
</div>
      <div className="sub">
        <p>Internal Solution Hub offers a single view to track</p>
        <p className='ml-15'>and manage all your assets.</p>
      </div>
          
          <button className="google-btn">
            <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}


export default Login;