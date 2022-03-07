import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import MovieInfo from "./components/MovieInfo";
import Favorites from "./components/Favorites";
import { LanguageContext } from "./context/lang";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
	const [lang, setLang] = useState("en");
	return (
		<LanguageContext.Provider value={{ lang, setLang }}>
			<BrowserRouter>
				<Navbar />
				<div className="container mt-5">
					<Switch>
						<Route path={"/login"} exact component={Login} />
						<Route path={"/register"} exact component={Register} />
						<Route path={"/"} exact component={Movies}>
							<Redirect to="/movies" />
						</Route>
						<Route path={"/movies"} exact component={Movies} />
						<Route path={"/favorites"} exact component={Favorites} />
						<Route path={"/movies/:id"} exact component={MovieInfo} />
					</Switch>
				</div>
			</BrowserRouter>
		</LanguageContext.Provider>
	);
}

export default App;
