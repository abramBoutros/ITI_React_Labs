import React from "react";
import { axiosInstance } from "../network/axiosConfig";
import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axiosInstance
			.get("/popular")
			.then((res) => {
				setMovies(res.data.results);
				// console.log(res.data.results);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="d-flex flex-row justify-content-start flex-wrap">
			{movies.map((movie) => (
				<div key={movie.id}>
					<MovieCard data={movie} />
				</div>
			))}
		</div>
	);
};

export default Movies;
