import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';

const EditBook = (props: EditBookProps) => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Array<IBook>>([]);
    const [isAuth, setIsAuth] = useState<Boolean>(false);

    const [theTitle, setTheTitle] = useState<string>('');
    const [theAuthor, setTheAuthor] = useState<string>('');
    const [thePrice, setThePrice] = useState<number>(0);
    const [theCategory, setTheCategory] = useState<number>(0);
    const [allCategory, setAllCategory] = useState<Array<IOption>>([]);

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            setIsAuth(true);
        }

        apiService('/api/books/' + id)
            .then(book => setBook(book));

        apiService('/api/categories/')
            .then(book => setBook(book));
    }, []);

    const submitEdit = () => {
        apiService('api/editbook/' + id, "DELETE");
    }

    const hTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheTitle(e.target.value);
    }

    const hAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheAuthor(e.target.value);
    }

    const hPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThePrice(Number(e.target.value));
    }

    const hCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheCategory(Number(e.target.value));
    }

    return (
        <>
            <Nav />
            <h1>SingleBook Page</h1>
            <div>
                <input type="text" value={book[0]?.title} onChange={hTitle}></input>
                <input type="text" value={book[0]?.author} onChange={hAuthor}></input>
                <input type="text" value={book[0]?.price} onChange={hPrice}></input>
                <input type="text" value={book[0]?.categoryname} onChange={hCategory}></input>
                <select></select>
                <hr></hr>
            </div>
            <button onClick={submitEdit}>Edit This Book</button>

        </>
    );
};

interface EditBookProps { }

export default EditBook;



interface IBook {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date,
    categoryname: string
}

interface IOption {
    id: number,
    name: string
}