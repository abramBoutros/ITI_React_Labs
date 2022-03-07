import { SET_FAV } from "../actions/addFav";
import { REMOVE_FAV } from "../actions/removeFav";

const INITIAL_STATE = {
	faves: [],
};

const newFaves = (state, action) => {
	const res = state.faves.filter((movie) => {
		// console.log(movie.data.id, action.payload, "movie id");
		return movie.data.id !== action.payload;
	});
	// console.log(res);
	return res;
};

export default function addFavReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_FAV:
			return {
				...state,
				faves: [...state.faves, action.payload],
			};
		case REMOVE_FAV:
			console.log(action.payload.id, state.faves, "now");
			return {
				...state,
				faves: newFaves(state, action),
			};
		default:
			return state;
	}
}
