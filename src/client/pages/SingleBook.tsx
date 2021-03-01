import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';

const SingleBook = (props: SingleBookProps) => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Array<IBook>>([]);
    const [isAuth, setIsAuth] = useState<Boolean>(false);

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            setIsAuth(true);
        }

        apiService('/api/books/' + id)
            .then(book => setBook(book));
    }, []);

    const deleteBook = async () => {
        const r = await apiService('/api/books/delete/' + id, "DELETE");
        if(r) history.push('/books');
    }


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
            {isAuth && <Link to={"/editbook/" + id}><button>Edit This Book</button></Link>}
            {isAuth && <button onClick={deleteBook}>Delete This Book</button>}
            
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