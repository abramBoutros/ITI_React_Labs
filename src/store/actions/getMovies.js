import { axiosInstance } from "../../network/axiosConfig";

export const getMovies = (lang) => (dispatch) => {
	return axiosInstance
		.get("/popular", {
			params: {
				language: lang,
			},
		})
		.then((res) => {
			console.log(res.data.results);
			dispatch({
				type: "GET_MOVIES",
				payload: res.data.results,
			});
		})
		.catch((err) => console.log(err));
};
