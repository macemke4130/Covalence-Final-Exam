import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';

const SingleBook = (props: SingleBookProps) => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Array<IBook>>([]);

    const [whoIsLoggedIn, setWhoIsLoggedIn] = useState<number | null>(null);
    const [whoWroteThisPost, setWhoWroteThisPost] = useState<number>(0);
    

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            apiService('/api/users/who')
                .then(who => {
                    setWhoIsLoggedIn(who);
                });
        }

        apiService('/api/books/' + id)
        .then(book => setBook(book));
    }, []);


    return (
        <> 
            <Nav />
            <h1>SingleBook Page</h1>
                <div>
                    <h4>{book[0]?.title}</h4>
                    <p>Author: {book[0]?.author}</p>
                    <p>Price: ${book[0]?.price}</p>
                    <p>Category / Genre: {book[0]?.categoryname}</p>
                    <hr></hr>
                </div>
        </>
    );
};

interface SingleBookProps { }

export default SingleBook;


interface IBook {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date,
    categoryname: string
}