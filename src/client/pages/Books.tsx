import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';

const Books = (props: BooksProps) => {
    const [allBooks, setAllBooks] = useState<Array<IBook>>([]);

    useEffect(() => {
        apiService('/api/books')
            .then(books => setAllBooks(books));
    }, []);

    return (
        <>
            <Nav />
            <h1>Books Page</h1>
            {allBooks?.map(book => (
                <div key={book.id}>
                    <h4><Link to={"/books/" + book.id}>{book.title}</Link></h4>
                    <p>Author: {book.author}</p>
                    <p>Price: ${book.price}</p>
                    <p>Category / Genre: {book.categoryname}</p>
                    <hr></hr>
                </div>
            ))}
        </>
    );
};

interface BooksProps { }

export default Books;

interface IBook {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date,
    categoryname: string
}