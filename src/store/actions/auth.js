export const SET_AUTH = "SET_AUTH";
export const SET_USER_DETAILS = "SET_USER_DETAILS";

export const setIsAuthenticatedUser = (payload) => {
  return {
    type: SET_AUTH,
    payload,
  };
};

export const setUserDetails = (payload) => {
  return {
    type: SET_USER_DETAILS,
    payload,
  };
};
