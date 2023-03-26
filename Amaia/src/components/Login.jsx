import React from 'react'
import { Link } from 'react-router-dom'
import { auth, googleProvider } from '../config/firebase-config';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email)
    
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.error(err)
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        }catch(err){
            console.error(err)
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth)
        }catch(err){
            console.error(err)
        }
    }

  return (
    <div className='container'>
        <div className='login-container'>
            <div className='login-form'>
                <img className='login-logo' src='logo-amaia.png'></img>
                <h1>Welcome Back</h1>
                <p>please enter your details.</p>
                <form className='form'>
                    <input type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Enter your password' onChange={e => setPassword(e.target.value)}/>
                    <button className='login-button' onClick={signIn}>Continue</button>
                </form>
                <div className='or'>
                    <hr></hr>
                    <p>OR</p>
                    <hr />
                </div>
                <div className='login-buttons'>
                    <button onClick={signInWithGoogle}>Continue With Google</button>
                    
                </div>
                <p>Don't have an Account? <Link to="/register">Sign up</Link></p>
            </div>
            <div className='login-image-container'>
                <img className='login-image' src='login-image.jpg'></img>
            </div>
        </div>
    </div>
  )
}

export default Login