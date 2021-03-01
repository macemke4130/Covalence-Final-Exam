import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

const Register = (props: RegisterProps) => {

    return (
        <> 
            <Nav />
            <h1>Register Page</h1>
        </>
    );
};

interface RegisterProps { }

export default Register;
