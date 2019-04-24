import React, { Component } from 'react';
import Credentials from '../Credentials/Credentials';

import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            fullName: '',
            contactInfo: ''
        }
    }

    handleLogin(){
        // SQL to verify that the username and password are correct and that they have an account //
    }

    handleNewUser(){
        // SQL to create a new user and save info in db // Login after account is created //
    }

    render(){
        return(
            <div id="login">
                <div id="login-box-wrapper">
                    <div id="logo">
                        <p>Instagram</p>
                    </div>
                    <p>Sign up to see photos and videos of your friends!</p>
                    <div id="login-creds">
                        < Credentials />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;