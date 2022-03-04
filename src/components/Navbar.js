import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
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
							Favorites
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
			</div>
		</nav>
	);
}
