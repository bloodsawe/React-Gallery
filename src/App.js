import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Header } from "./component/Header";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";

function App() {
	return (
		<Router>
			<Header>
				<div className="header-wrapper">
					<Link className="link" to="/">
						Home
					</Link>
					<Link className="link" to="/favorite">
						Favourite
					</Link>
				</div>
			</Header>
			<div className="App">
				<Switch>
					<Route exact component={Home} path="/" />
					<Route exact component={Favorite} path="/favorite" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
