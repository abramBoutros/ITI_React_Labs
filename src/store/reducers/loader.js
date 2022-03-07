import { SET_LOADER } from "../actions/loader";

const INITIAL_STATE = {
  isLoading: false,
};

export default function loader(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
