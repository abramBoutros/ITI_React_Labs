import React, { useContext } from "react";
import { axiosInstance } from "../network/axiosConfig";
import { useEffect, useState } from "react";
import { LanguageContext } from "../context/lang";
// import { useParams } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function MovieInfo() {
	const params = useParams();

	const { lang } = useContext(LanguageContext);
	const [movie, setMovie] = useState();

	useEffect(() => {
		axiosInstance
			.get(`/${params.id}`, {
				params: {
					page: 1,
					language: lang,
				},
			})
			.then((res) => {
				setMovie(res.data);
				console.log(res);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="card m-3 shadow-lg" style={{ width: "500px" }}>
			<img
				className="card-img-top"
				src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
				alt="Card cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{movie?.title}</h5>
				<p className="card-text">Rating : {movie?.vote_average}</p>
				<p className="card-text">Vote Count : {movie?.vote_count}</p>
				<p className="card-text">OverView : {movie?.overview}</p>
			</div>
		</div>
	);
}
