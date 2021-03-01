import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';

const EditBook = (props: EditBookProps) => {

    return (
        <> 
            <Nav />
            <h1>EditBook Page</h1>
        </>
    );
};

interface EditBookProps { }

export default EditBook;
