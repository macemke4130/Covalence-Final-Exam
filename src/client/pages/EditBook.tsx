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

        getCats();
    }, []);

    const getCats = async () => {
        const r = await apiService('/api/books/categories');
        setAllCategory(r);
        getBook();
    }

    const getBook = async () => {
       const r = await apiService('/api/books/' + id);
       console.log(r[0].author)
       setTheAuthor(r[0].author);
       setTheTitle(r[0].title);
       setThePrice(r[0].price);
       setTheCategory(r[0].categoryid);
    }

    const submitEdit = () => {
        const bodyObject = {
            title: theTitle,
            author: theAuthor,
            categoryid: theCategory,
            price: thePrice
        }

        apiService('/api/books/editbook/' + id, "PUT", bodyObject);
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
            <h1>SingleBook Page</h1>
            <div>
                <input type="text" value={theTitle} onChange={hTitle}></input>
                <input type="text" value={theAuthor} onChange={hAuthor}></input>
                <input type="text" value={thePrice} onChange={hPrice}></input>
                <select id="cats" value={theCategory} onChange={hCategory}>
                    {allCategory?.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <hr></hr>
            </div>
            <button onClick={submitEdit}>Submit Edit</button>

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