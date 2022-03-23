import * as AuthActions from "../Actions/auth.actions";

const initialState = {
  accountDetails: {},
  profileDetails: {},
  bannerData: {},
  authenticated: false,
  validating: false,
  getAccount: false,
  getProfile: false,
  getBannerData: false,
  error: null,
  cred: {},
  signingUp: false,
  signUpResult: null,
  errorInSignup: false,
  errorAccount: {},
  errorProfile: {},
  errorBannerData: {},
};
// username: "j2ee",
// password: "j2ee",
export default function (state = initialState, action) {
  switch (action.type) {
    case AuthActions.SIGNOUT:
      return {
        ...state,
        authenticated: false,
        cred: {},
      };
    case AuthActions.SIGNIN.REQUEST:
      return {
        ...state,
        validating: true,
        cred: action.payload,
      };
    case AuthActions.SIGNIN.SUCCESS:
      return {
        ...state,
        authenticated: true,
        validating: false,
      };
    case AuthActions.SIGNIN.FAILURE:
      return {
        ...state,
        authenticated: false,
        validating: false,
        error: action.payload,
      };
    case AuthActions.SIGNUP.REQUEST:
      return {
        ...state,
        signingUp: true,
      };
    case AuthActions.SIGNUP.SUCCESS:
      return {
        ...state,
        signingUp: false,
        signUpResult: action.payload,
      };
    case AuthActions.SIGNUP.FAILURE:
      return {
        ...state,
        signingUp: false,
        errorInSignup: action.payload,
      };
    case AuthActions.UPDATE_ACCOUNT.REQUEST:
      return {
        ...state,
        signingUp: true,
      };
    case AuthActions.UPDATE_ACCOUNT.SUCCESS:
      return {
        ...state,
        signingUp: false,
        signUpResult: action.payload,
      };
    case AuthActions.UPDATE_ACCOUNT.FAILURE:
      return {
        ...state,
        signingUp: false,
        errorInSignup: action.payload,
      };
    case AuthActions.GET_PROFILE_BY_USERID.REQUEST:
      return {
        ...state,
        getProfile: true,
      };
    case AuthActions.GET_PROFILE_BY_USERID.SUCCESS:
      return {
        ...state,
        getProfile: false,
        profileDetails: action.payload,
      };
    case AuthActions.GET_PROFILE_BY_USERID.FAILURE:
      return {
        ...state,
        getProfile: false,
        errorProfile: action.payload,
      };
    case AuthActions.GET_ACCOUNT_BY_USERID.REQUEST:
      return {
        ...state,
        getAccount: true,
      };
    case AuthActions.GET_ACCOUNT_BY_USERID.SUCCESS:
      return {
        ...state,
        getAccount: false,
        accountDetails: action.payload,
      };
    case AuthActions.GET_ACCOUNT_BY_USERID.FAILURE:
      return {
        ...state,
        getAccount: false,
        errorAccount: action.payload,
      };
    case AuthActions.GET_BANNER_DATA.REQUEST:
      return {
        ...state,
        getBannerData: true,
      };
    case AuthActions.GET_BANNER_DATA.SUCCESS:
      return {
        ...state,
        getBannerData: false,
        bannerData: action.payload,
      };
    case AuthActions.GET_BANNER_DATA.FAILURE:
      return {
        ...state,
        getProfile: false,
        errorBannerData: action.payload,
      };
    default:
      return state;
  }
}
