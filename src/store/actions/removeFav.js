export const REMOVE_FAV = "REMOVE_FAV";

export const removeFav = (payload) => {
	return {
		type: REMOVE_FAV,
		payload,
	};
};
