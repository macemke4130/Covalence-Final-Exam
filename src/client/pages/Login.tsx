import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

const Login = (props: LoginProps) => {

    return (
        <> 
            <Nav />
            <h1>Login Page</h1>
        </>
    );
};

interface LoginProps { }

export default Login;
