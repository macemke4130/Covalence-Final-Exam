import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

const NewBook = (props: NewBookProps) => {

    return (
        <> 
            <Nav />
            <h1>NewBook Page</h1>
        </>
    );
};

interface NewBookProps { }

export default NewBook;
