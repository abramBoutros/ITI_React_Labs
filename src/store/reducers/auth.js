import { SET_AUTH, SET_USER_DETAILS } from "./../actions/auth";

const INITIAL_STATE = {
  isAuthenticated: false,
  useDetails: {},
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        isAuthenticated: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        useDetails: action.payload,
      };
    default:
      return state;
  }
}
