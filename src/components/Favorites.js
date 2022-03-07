import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function Favorites() {
	const faves = useSelector((state) => state.addFavReducer.faves);
	useEffect(() => {
		console.log(faves);
	}, []);
	return (
		<div className="d-flex flex-row justify-content-start flex-wrap">
			{faves.map((movie) => (
				<div key={movie.data.id}>
					<MovieCard data={movie.data} />
				</div>
			))}
		</div>
	);
}
