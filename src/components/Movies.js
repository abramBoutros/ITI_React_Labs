import React, { useContext, useEffect } from "react";
// import { axiosInstance } from "../network/axiosConfig";

import { useDispatch, useSelector } from "react-redux";
import { LanguageContext } from "../context/lang";

import { getMovies } from "../store/actions/getMovies";
import MovieCard from "./MovieCard";

const Movies = () => {
	const movies = useSelector((state) => state.movies.moviesArr);
	const { lang } = useContext(LanguageContext);

	const dispatch = useDispatch();
	useEffect(() => {
		console.log(lang, "here");

		dispatch(getMovies(lang));
	}, [lang]);

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
