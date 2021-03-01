import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EditBook from "./pages/EditBook";
import NewBook from "./pages/NewBook";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";
import Books from "./pages/Books";

import PrivateRoute from "./components/PrivateRoute";

const App = (props: AppProps) => {

	return (
		<Router>
			<Switch>
				<PrivateRoute path="/editbook/:id">
					<EditBook />
				</PrivateRoute>
				<Route path="/books/:id">
					<SingleBook />
				</Route>
				<PrivateRoute path="/newbook">
					<NewBook />
				</PrivateRoute>
				<Route path="/books">
					<Books />
				</Route>
				<Route  path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

interface AppProps { }

export default App;
