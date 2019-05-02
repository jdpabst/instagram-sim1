import React, { Component } from 'react';

import './Credentials.css'

class Credentials extends Component{
    render(){
        return(
            <div id="credentials-wrapper">

                <div id='login-bars'>
                    <div className='bar'></div>
                    <p> Login </p>
                    <div className='bar'></div>
                </div>
                
                <div id='login-inputs' className='inputs'>
                    <input className='username' value='Email' />
                    <input className='password' value='Password' />
                </div>

                <button id='login-bttn' className='bttn'> Login</button>

                <div id='login-bars'>
                    <div className='bar'></div>
                    <p> OR </p>
                    <div className='bar'></div>
                </div>

                <div id='sign-up-inputs' className='inputs'>
                    <input className="username" value='Mobile Number' />
                    <input className='password' value='Full Name' />
                    <input className='password' value='Email' />
                    <input className='password' value='Password' />
                    <input className='' value='Verify Password' />
                </div>

                <button id='sign-up-bttn' className='bttn'>Sign Up</button>
            </div>
        )
    }
}

export default Credentials;