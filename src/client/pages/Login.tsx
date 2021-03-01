import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';

const Login = (props: LoginProps) => {
    const [theEmail, setTheEmail] = useState<string>('');
    const [theUsername, setTheUsername] = useState<string>('');
    const [thePassword, setThePassword] = useState<string>('');

    const history = useHistory();

    const hEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheEmail(e.target.value);
    }

    const hUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheUsername(e.target.value);
    }

    const hPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThePassword(e.target.value);
    }

    const validateLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const bodyObject = {
            email: theEmail,
            password: thePassword
        }

        const token = await apiService('auth/login', "POST", bodyObject);
        if (token) {
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("token", token);
            history.push("/allbooks");
        }
    }

    return (
        <>
            <Nav />
            <h1>Login Page</h1>
            <form>
                <input type="text" placeholder="Email" onChange={hEmail} value={theEmail}></input>
                <input type="password" placeholder="Password" onChange={hPassword} value={thePassword}></input>
                <button onClick={validateLogin} className="btn btn-primary">Log in!</button>
            </form>
        </>
    );
};

interface LoginProps { }

export default Login;
