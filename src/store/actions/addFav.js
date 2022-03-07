export const SET_FAV = "SET_FAV";

export const addFav = (payload) => {
	return {
		type: SET_FAV,
		payload,
	};
};
