import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Header } from "./component/Header";
import { Home } from "./pages/Home";
import { Favourite } from "./pages/Favourite";

function App() {
	return (
		<Router>
			<Header>
				<Link to="/">Home</Link>
				<Link to="/favourite">Favourite</Link>
			</Header>
			<div className="App">
				<Switch>
					<Route exact component={Home} path="/" />
					<Route exact component={Favourite} path="/favourite" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
