import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

const SingleBook = (props: SingleBookProps) => {

    return (
        <> 
            <Nav />
            <h1>SingleBook Page</h1>
        </>
    );
};

interface SingleBookProps { }

export default SingleBook;
