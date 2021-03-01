import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props: NavProps) => {
	const isAuth = localStorage.getItem("isAuth");
	cosnt v = false;
	if(isAuth === "true") 

	return (
		<>
        <nav>
            <Link to="/"><button className="btn btn-primary m-2">Home</button></Link>
            <Link to="/books"><button className="btn btn-primary m-2">All Books</button></Link>
            <Link to="/edit"><button className="btn btn-primary m-2">All edit</button></Link>
            <Link to="/login"><button className="btn btn-primary m-2">Login</button></Link>
            <Link to="/register"><button className="btn btn-primary m-2">Register</button></Link>
            <Link to="/newbook"><button className="btn btn-primary m-2">New Book</button></Link>
        </nav>
		</>
	);
};

interface NavProps { }

export default Nav;