const INITIAL_STATE = {
	moviesArr: [],
};

export default function movies(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_MOVIES":
			return {
				...state,
				moviesArr: [...action.payload],
			};

		default:
			return state;
	}
}
