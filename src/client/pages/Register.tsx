import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';

const Register = (props: RegisterProps) => {
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

    const validateRegister = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const bodyObject = {
            email: theEmail,
            name: theUsername,
            password: thePassword
        }

        const token = await apiService('auth/register', "POST", bodyObject);
        if (token) {
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("token", token);
            history.push("/books");
        }
    }

    return (
        <>
            <Nav />
            <h1>Register Page</h1>
            <form>
                <input type="text" placeholder="Email" onChange={hEmail} value={theEmail}></input>
                <input type="text" placeholder="Username" onChange={hUsername} value={theUsername}></input>
                <input type="password" placeholder="Password" onChange={hPassword} value={thePassword}></input>
                <button onClick={validateRegister} className="btn btn-primary">Register!</button>
            </form>
        </>
    );
};

interface RegisterProps { }

export default Register;
