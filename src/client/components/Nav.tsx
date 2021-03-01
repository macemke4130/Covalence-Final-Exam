import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Nav = (props: NavProps) => {
	const isAuth = localStorage.getItem("isAuth");
	let v = false;
	isAuth === "true" ? v = true : v = false;

	const history = useHistory();

	const hLogOut = () => {
		localStorage.clear();

		history.push("/");
	}

	return (
		<>
        <nav>
            <Link to="/"><button className="btn btn-primary m-2">Home</button></Link>
            <Link to="/books"><button className="btn btn-primary m-2">All Books</button></Link>
            {v === false && <Link to="/login"><button className="btn btn-primary m-2">Login</button></Link>}
            {v === false && <Link to="/register"><button className="btn btn-primary m-2">Register</button></Link>}
            {v && <Link to="/newbook"><button className="btn btn-primary m-2">New Book</button></Link>}
            {v && <button onClick={hLogOut} className="btn btn-primary m-2">Log Out</button>}
			
        </nav>
		</>
	);
};

interface NavProps { }

export default Nav;