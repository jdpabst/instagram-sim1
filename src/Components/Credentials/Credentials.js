import React, { Component } from 'react';
import axios from 'axios';

import './Credentials.css'

class Credentials extends Component{
    constructor(props){
        super(props);

        this.state = {
            mobile_num: '',
            full_name: '',
            email: '',
            password: '',
            verify_password: '',
        }
        this.handleLoginEmail = this.handleLoginEmail.bind(this);
        this.handleLoginPassword = this.handleLoginPassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleLoginEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    handleLoginPassword(e){
        this.setState({
            password: e.target.value
        })
    }

    loginUser(){
        console.log(`Logging in ${this.state.email} with password: ${this.state.password}`)
        axios.get('/api/user/login')
            .then((res) => {
                console.log(res.data);
            })
        
    }

    render(){
        return(
            <div id="credentials-wrapper">

                <div id='login-bars'>
                    <div className='bar'></div>
                    <p> Login </p>
                    <div className='bar'></div>
                </div>
                
                <div id='login-inputs' className='inputs'>
                    <input onChange={ this.handleLoginEmail }  className='username' type='text' placeholder='Email' />
                    <input onChange={ this.handleLoginPassword } className='password' type='text' placeholder='Password' />
                </div>

                <button onClick={ this.loginUser } id='login-bttn' className='bttn'> Login</button>

                <div id='login-bars'>
                    <div className='bar'></div>
                    <p> OR </p>
                    <div className='bar'></div>
                </div>

                <div id='sign-up-inputs' className='inputs'>
                    <input className="username" placeholder='Mobile Number' />
                    <input className='password' placeholder='Full Name' />
                    <input className='password' placeholder='Email' />
                    <input className='password' placeholder='Password' />
                    <input className='' placeholder='Verify Password' />
                </div>

                <button id='sign-up-bttn' className='bttn'>Sign Up</button>
            </div>
        )
    }
}

export default Credentials;