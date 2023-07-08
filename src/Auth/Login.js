import React from "react";
import './login.css'
import { ReactComponent as GoogleIcon } from './google.svg';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignInForm from "./SignUp";



const loginForm = ()=>{
    return(
        

          <div class="container">
            <div className="log-form">
            {/* <Router> */}
            <div className="logoIcon">   </div>
           <p className="bold-text">Welcome Back</p>
              <p className="fade-text">Create new account?
               <span>  <Link to="/signUp">Sign Up</Link></span>
               </p>

             

               <div className='log-form-container'>


              <div className="log-detail">
                <label for="email">Email address</label>
                <input type="email" placeholder="Enter your username or email" className="email-inp"/>
               
                <label for="password">Password</label>
                <input type="password" placeholder="Enter your password"/>
                </div>

             
                <div class="checkbox-container">
                <div class="left">
                  <input type="checkbox" class="check-btn" id="rememberMe" />
                  <label for="rememberMe">Remember me</label>
                </div>
                <div class="right">
                  <a href="#" class="forgot-password">Forgot password</a>
                </div>
              </div>

                 <input type="submit" value="Sing In"/>

                 
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
export default loginForm;
