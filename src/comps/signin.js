// src/SignIn.js
import React, { useState } from 'react';
import './signin.css';
import Home from './Home';
import googleIcon from './../assets/google-icon.svg';
import { auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './config';
import { signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      {isAuthenticated ? <Home /> :
        <div className='container'>
          <div className='blackContainer'>
            <h1>Board</h1>
          </div>
          <div className='authContainer'>
            <div className='formContainer'>
              <div className='formHead'>
                <h3>{isRegistered ? 'Log In' : 'Register'}</h3>
              </div>
              <div className='signinWith'>
                <div className='signinOptions' onClick={handleGoogleSignIn}>
                  <h6><img src={googleIcon} alt="Google Icon" />Sign in with Google</h6>
                </div>
              </div>
              <form className='form' onSubmit={handleSubmit}>
                <div className='labelledInput'>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='labelledInput'>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p style={{ color: "#346BD4" }}>{isRegistered ? 'Forgot password?' : ''}</p>
                <button id='submitBtn' type="submit">{isRegistered ? 'Log In' : 'Register'}</button>
              </form>
              <h6 className='register'>
                {isRegistered ? 'Don’t have an account? ' : 'Already have an account? '}
                <span style={{ color: "#346BD4", cursor: "pointer" }} onClick={() => setIsRegistered(!isRegistered)}>
                  {isRegistered ? 'Register here' : 'Log In here'}
                </span>
              </h6>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SignIn;
