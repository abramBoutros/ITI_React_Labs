import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addFav } from "../store/actions/addFav";
import { removeFav } from "../store/actions/removeFav";

export default function MovieCard({ data }) {
	const faves = useSelector((state) => state.addFavReducer.faves);
	const dispatch = useDispatch();

	const [fav, setFav] = useState(false);

	const checkFav = () => {
		const movie = faves.find((movie) => movie.data.id === data.id);

		if (!movie) {
			setFav(data.fav);
			return;
		}
		setFav(data.fav);
	};
	useEffect(() => {
		checkFav();
	}, []);

	const favClicked = () => {
		checkFav();
		const movie = faves.find((movie) => movie.data.id === data.id);

		if (movie?.data.fav === true) {
			// console.log(data, "here");
			dispatch(removeFav(data.id));
			data.fav = false;
			setFav(data.fav);
			return;
		}
		if (movie) {
			return;
		}

		data.fav = true;
		setFav(data.fav);
		dispatch(addFav({ data }));
	};
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
				<i
					onClick={favClicked}
					type="button"
					className={` ms-3   fa-solid fa-star  ${fav ? "  " : " btn"} `}
				></i>
			</div>
		</div>
	);
}
