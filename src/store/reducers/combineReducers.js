import { combineReducers } from "redux";
import auth from "./auth";
import language from "./language";
import loader from "./loader";
import addFavReducer from "./addFav";
import movies from "./movies";

export default combineReducers({
	auth,
	language,
	loader,
	addFavReducer,
	movies,
});
