import { createRequestTypes, action } from "../../Utils/redux";

export const SIGNIN = createRequestTypes("SIGNIN");
export const SIGNUP = createRequestTypes("SIGNUP");
export const UPDATE_ACCOUNT = createRequestTypes("UPDATE_ACCOUNT");

export const SIGNOUT = "SIGNOUT";

export const GET_PROFILE_BY_USERID = createRequestTypes(
  "GET_PROFILE_BY_USERID"
);
export const GET_ACCOUNT_BY_USERID = createRequestTypes(
  "GET_ACCOUNT_BY_USERID"
);
export const GET_BANNER_DATA = createRequestTypes("GET_BANNER_DATA");

export const signIn = {
  request: (credentials) => action(SIGNIN.REQUEST, credentials),
  success: (data) => action(SIGNIN.SUCCESS, data),
  failure: (error) => action(SIGNIN.FAILURE, error),
};

export const signOut = {
  request: () => action(SIGNOUT),
};

export const signUp = {
  request: (accountDetails) => action(SIGNUP.REQUEST, accountDetails),
  success: (data) => action(SIGNUP.SUCCESS, data),
  failure: (error) => action(SIGNUP.FAILURE, error),
};

export const updateAccount = {
  request: (accountDetails) => action(UPDATE_ACCOUNT.REQUEST, accountDetails),
  success: (data) => action(UPDATE_ACCOUNT.SUCCESS, data),
  failure: (error) => action(UPDATE_ACCOUNT.FAILURE, error),
};

export const getProfileByUserId = {
  request: (userId) => action(GET_PROFILE_BY_USERID.REQUEST, userId),
  success: (profile) => action(GET_PROFILE_BY_USERID.SUCCESS, profile),
  failure: (error) => action(GET_PROFILE_BY_USERID.FAILURE, error),
};

export const getAccountByUserId = {
  request: (userId) => action(GET_ACCOUNT_BY_USERID.REQUEST, userId),
  success: (data) => action(GET_ACCOUNT_BY_USERID.SUCCESS, data),
  failure: (error) => action(GET_ACCOUNT_BY_USERID.FAILURE, error),
};

export const getBannerData = {
  request: (category) => action(GET_BANNER_DATA.REQUEST, category),
  success: (data) => action(GET_BANNER_DATA.SUCCESS, data),
  failure: (error) => action(GET_BANNER_DATA.FAILURE, error),
};
