import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='container'>
        <div className='login-container'>
            <div className='login-form register-form'>
                <img className='login-logo' src='logo-amaia.png'></img>
                <h1>Create an Account</h1>
                <p>please enter your details.</p>
                <form className='form'>
                    <div className='register-boxes'>
                        <div>
                            <label htmlFor="name">Name: </label><input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label htmlFor="last-name">Last name: </label><input type="text" placeholder='Enter your last name'/>
                        </div>
                    </div>
                    <div className='register-boxes'>
                        <div>
                            <label htmlFor="email">Email: </label><input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone number: </label><input type="number" placeholder='Enter your email'/>
                        </div>
                    </div>
                    <div >
                        <label htmlFor="id">ID: </label><input type="number" placeholder='Enter your ID'/>
                    </div>

                    <h4>Password</h4>
                    
                    <input type="password" placeholder='Enter your password'/>
                    <input type="password" placeholder='confirm password'/>
                    <button className='login-button'>Continue</button>
                </form>
                <div className='or'>
                    <hr></hr>
                    <p>OR</p>
                    <hr />
                </div>
                <div className='login-buttons'>
                    <button>Continue With Google</button>  
                </div>
                <p>Do you have an Account? <Link to="/login">Login</Link></p>
            </div>
            <div className='register-image-container'>
                <img className='login-image' src='login-image.jpg'></img>
            </div>
        </div>
    </div>
  )
}

export default Register