import React, { Component } from 'react';

import './Credentials.css'

class Credentials extends Component{
    render(){
        return(
            <div id="credentails-wrapper">
                <p> Login </p>
                <div id='login-inputs'>
                    <input className='username' value='Username' />
                    <input className='password' value='Password' />
                </div>
                <button>Login</button>

                <p> OR </p>

                <div id='sign-up-inputs'>
                    <input className="username" value='Mobile Number or Email' />
                    <input className='password' value='Full Name' />
                    <input className='password' value='Username' />
                    <input className='password' value='Password' />
                    <input className='' value='Verify Password' />
                </div>
                <button>Sign Up</button>
            </div>
        )
    }
}

export default Credentials;