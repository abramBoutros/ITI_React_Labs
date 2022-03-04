import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie",
	params: {
		api_key: "801e8bbfcf73f4e6bd852bc32bd613a6",
	},
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
// 	function (config) {
// 		// Do something before request is sent
// 		console.log(config);
// 		config.headers["Authorization"] = "djsad5s4a3d543sd4as5da6sd4";
// 		config.params["test"] = "test";
// 		return config;
// 	},
// 	function (error) {
// 		// Do something with request error
// 		return Promise.reject(error);
// 	}
// // );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
// 	function (response) {
// 		// Any status code that lie within the range of 2xx cause this function to trigger
// 		// Do something with response data
// 		console.log(response);
// 		return response;
// 	},
// 	function (error) {
// 		// Any status codes that falls outside the range of 2xx cause this function to trigger
// 		// Do something with response error
// 		// Show ERROR Handler Message
// 		return Promise.reject(error);
// 	}
// );
