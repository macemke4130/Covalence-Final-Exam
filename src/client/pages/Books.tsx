import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

const Books = (props: BooksProps) => {

    return (
        <> 
            <Nav />
            <h1>Books Page</h1>
        </>
    );
};

interface BooksProps { }

export default Books;
