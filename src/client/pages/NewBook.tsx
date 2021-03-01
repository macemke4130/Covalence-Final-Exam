import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';

const NewBook = (props: NewBookProps) => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Array<IBook>>([]);
    const [isAuth, setIsAuth] = useState<Boolean>(false);

    const [theTitle, setTheTitle] = useState<string>('');
    const [theAuthor, setTheAuthor] = useState<string>('');
    const [thePrice, setThePrice] = useState<number>(0);
    const [theCategory, setTheCategory] = useState<number>(1);
    const [allCategory, setAllCategory] = useState<Array<IOption>>([]);

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            setIsAuth(true);
        }

        getCats();
    }, []);

    const getCats = async () => {
        const r = await apiService('/api/books/categories');
        setAllCategory(r);
    }

    const sendNewBook = async () => {
        const bodyObject = {
            title: theTitle,
            author: theAuthor,
            categoryid: theCategory,
            price: thePrice
        }
       const r = await apiService('/api/books/new', "POST", bodyObject);
       if(r) history.push('/books');
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

    const hCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheCategory(Number(e.target.value));
    }

    return (
        <>
            <Nav />
            <h1>New Book Page</h1>
            <div>
                <input placeholder="Title" type="text" value={theTitle} onChange={hTitle}></input>
                <input placeholder="Author" type="text" value={theAuthor} onChange={hAuthor}></input>
                <input placeholder="Price" type="number" value={thePrice} onChange={hPrice}></input>
                <select id="cats" value={theCategory} onChange={hCategory}>
                    {allCategory?.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <hr></hr>
            </div>
            <button onClick={sendNewBook}>Submit Edit</button>
        </>
    );
};

interface NewBookProps { }

export default NewBook;

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