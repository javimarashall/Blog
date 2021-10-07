import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/header/header';
const axios = require('axios');

function Login() {
    const [redirect, setRedirect] = useState(false);
    //Register new user
    const [account1, setAccount1] = useState('');
    const [account2, setAccount2] = useState('');
    const [account3, setAccount3] = useState('');

    //sets username
    function handleSetInput1(event) {
        setAccount1(event.target.value)
        console.log(account1); 
    }

    //sets Email
    function handleSetInput2(event) {
        setAccount2(event.target.value)
        console.log(account2); 
    }

    //sets password
    function handleSetInput3(event) {
        setAccount3(event.target.value)
        console.log(account3);
    }

    const handleRegister = (event) => {
        console.log("******hello")
        axios.post("/api/register", {
            username: account1,
            email: account2,
            password: account3
        })
        .then(function(response) {
            console.log(response)
        });
    }
    //login user
    const [login1, setLogin1] = useState('');
    const [login2, setLogin2] = useState('');
    const [login3, setLogin3] = useState('');

    function handleSetLogin1(event) {
        setLogin1(event.target.value)
        console.log(setLogin1)
    }

    function handleSetLogin2(event) {
        setLogin2(event.target.value)
        console.log(setLogin2)
    }

    function handleSetLogin3(event) {
        setLogin3(event.target.value)
        console.log(setLogin2)
    }

    function handleLogin(event) {
        event.preventDefault()
        axios.post('./api/login', {
            username: login1,
            email: login2,
            password: login3
        })
            .then(function (response) {
                console.log(response);
                if (response) {
                    setRedirect(true)
                    console.log("hello2*****")
                }
            })
            console.log(login1, login2, login3);
    }

    return (
        <div>
            { redirect ? <Redirect to = {{
                pathname: '/home',
                state: { username: login1, email: login2, password: login3}
            }} /> :
                <div>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col s12 ">
                                <div className="signin">
                                    <h3>Sign In</h3>
                                    <div className="row">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input onChange={handleSetLogin2} id="email2" type="email" className="validate" />
                                                    <label for="email">Email</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input onChange={handleSetLogin3} id="password2" type="password" className="validate" />
                                                    <label for="password">Password</label>
                                                </div>
                                            </div>
                                            <button onClick={handleLogin} className="btn waves-effect waves-light" type="submit" name="action">Submit
                                            <i className="material-icons right">send</i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 ">
                                <div className="register">
                                    <h3>Register</h3>
                                    <div className="row">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input onChange={handleSetInput1} id="first_name" type="text" className="validate" />
                                                    <label for="first_name">Username</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input onChange={handleSetInput2} id="email" type="email" className="validate" />
                                                    <label for="email">Email</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input onChange={handleSetInput3} id="password" type="password" className="validate" />
                                                    <label for="password">Password</label>
                                                </div>
                                            </div>
                                            <button onClick={handleRegister} className="btn waves-effect waves-light" type="submit" name="action">Submit
                                            <i className="material-icons right">send</i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Login;