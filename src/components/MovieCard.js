import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
	return (
		<div className="card m-3 shadow-lg" style={{ width: "225px" }}>
			<img
				className="card-img-top"
				src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
				alt="Card cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{data.title}</h5>
				<p className="card-text">Rating : {data.vote_average}</p>

				<Link className="btn btn-primary" to={`movies/${data.id}`}>
					See More!
				</Link>
			</div>
		</div>
	);
}

// {{
//   pathname: "/movies",
//   search: "?id=" + data.id,
// }}
