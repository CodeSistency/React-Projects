import React from 'react'
import { Link } from 'react-router-dom'

function Address() {
  return (
    <div className='adress-container'>
      <div>
        <div className='login-form register-form address-form'>
                <img className='login-logo' src='logo-amaia.png'></img>
                <h1>Add an Address</h1>
                <p>please enter your details.</p>
                <form className='form'>
                    <div className='register-boxes'>
                        <div>
                            <label htmlFor="shipping-company">Shipping Company: </label><input type="text" placeholder='shipping company'/>
                        </div>
                        <div>
                            <label htmlFor="shipping-company-">Shipping Company 2 (opcional): </label><input type="text" placeholder='Shipping Company'/>
                        </div>
                    </div>
                    
                        <div>
                            <label htmlFor="Agency-Address">Agency Address: </label><input className='agency-address' type="text" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label htmlFor="Agency-Address-2">Agency Address 2 (opcional): </label><input className='agency-address' type="number" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label htmlFor="country">Country: </label><select><option value="Select a Country" selected></option></select>
                        </div>
                        <div>
                            <label htmlFor="state">State: </label><select><option value="Select a State" selected></option></select>
                        </div>
                        <div>
                            <label htmlFor="city">City: </label><select><option value="Select a city" selected></option></select>
                        </div>
                        <div>
                            <label htmlFor="postal-code">Postal Code: </label><input className='agency-address' type="text" placeholder='Shipping Company'/>
                        </div>
                        <div className='remember'>
                            <label htmlFor="postal-code">Remember: </label><input  type="checkbox" placeholder='Shipping Company'/>
                        </div>
                        
                    
                    
                    
                    <button className='login-button'>Continue</button>
                    
                </form>
                
               
            </div>
      </div>
  
    </div>
  )
}

export default Address