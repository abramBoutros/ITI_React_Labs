import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../context/lang";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
	const faves = useSelector((state) => state.addFavReducer.faves);

	const { lang, setLang } = useContext(LanguageContext);

	// if (lang !== x) {
	// 	setSelectedLang(lang);
	// }

	const [selectedLang, setSelectedLang] = useState(lang);
	useEffect(() => {
		setSelectedLang(lang);
	}, []);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className=" ms-3 navbar-brand" to="/">
				Movies
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{/* <li className="nav-item active">
						<NavLink
							to="/movies"
							// className={(isActive) =>
							// 	"nav-link " + (!isActive ? " " : "active")
							// }
							className="nav-link "
							activeClassName="active"
							aria-current="page"
						>
							Movies
						</NavLink>
					</li> */}
					<li className="nav-item">
						<NavLink
							to="/favorites"
							className="nav-link "
							activeClassName="active"
							aria-current="page"
						>
							Favorites : {faves.length}
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/login"
							// className={(isActive) =>
							// 	"nav-link" + (!isActive ? " " : "active")
							// }
							className="nav-link "
							activeClassName="active"
							aria-current="page"
						>
							Login
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/register"
							// className={(isActive) =>
							// 	"nav-link" + (!isActive ? "" : "active")
							// }
							className="nav-link "
							activeClassName="active"
							aria-current="page"
						>
							Register
						</NavLink>
					</li>
				</ul>
				<span className="nav-item text-light">
					current lang: {selectedLang}
				</span>
			</div>
			<button
				className=" me-2 cursor-pointer"
				onClick={() => {
					setLang("ar");
					setSelectedLang("ar");
				}}
			>
				Ar
			</button>
			<button
				className=" me-5	cursor-pointer"
				onClick={() => {
					setLang("en");
					setSelectedLang("en");
				}}
			>
				En
			</button>
		</nav>
	);
}
