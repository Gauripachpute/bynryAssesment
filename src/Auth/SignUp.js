import './login.css'
import './signup.css'
import React from 'react'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';


import { ReactComponent as GoogleIcon } from './google.svg';

export default class SignInForm extends React.Component{
    render(){
    return(
        
        <div class="container">
            <div className="log-form">
              <div className="logoIcon"></div>
           <p className="bold-text">Welcome</p>
              <p className="fade-text">Already have an account?  <Link to="/">Sign In</Link></p>

<div className='log-form-container'>

              <div className="log-detail">
              <label for="full name">Full name</label>
                <input type="text" placeholder="Enter your username or email" className="email-inp"/>
               
                <label for="aadhaar card">Aadhaar card no</label>
                <input type="number" placeholder="Enter your username or email" className="email-inp"/>
               
                <label for="email">Email address</label>
                <input type="email" placeholder="Enter your username or email" className="email-inp"/>
               
                <label for="password">Password</label>
                <input type="password" placeholder="Enter your password"/>
                </div>

             
                <div class="checkbox-container">
                <div class="left">
                  <input type="checkbox" class="check-btn" id="rememberMe" />
                  <label for="rememberMe">I agree to Terms and Conditions.</label>
                </div>
              </div>

                 <input type="submit" value="Sing Up"/> 
                 
              <div className="log-method">
              <div className="or-section"><div className="hr-line"></div><span>or</span><div className="hr-line"></div></div>
              <button className="google-btn"><span><GoogleIcon className="google-icon" /></span> <span>Continue with Google</span></button>
              </div>

              </div>
            

            </div>
            <div className="bg-vid">
              </div>            
          </div>
       
    );
    }
}
// export default SignInForm;