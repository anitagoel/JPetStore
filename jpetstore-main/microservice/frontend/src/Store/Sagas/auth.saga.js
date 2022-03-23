import { call, put, takeLatest } from "redux-saga/effects";
import { AuthorizationApi } from "../../Services/authorization.service";
import {
  SIGNIN,
  SIGNUP,
  signUp,
  signIn,
  GET_ACCOUNT_BY_USERID,
  GET_PROFILE_BY_USERID,
  GET_BANNER_DATA,
  getAccountByUserId,
  getProfileByUserId,
  getBannerData,
  updateAccount,
  UPDATE_ACCOUNT,
} from "../Actions/auth.actions";

function* validateCredentials(action) {
  try {
    const { data } = yield call(
      AuthorizationApi.validateCredentials,
      action.payload
    );
    // localStorage.setItem("token", data.access_token);
    yield put(signIn.success(data));
    yield put(getProfileByUserId.request(action.payload.username));
  } catch (e) {
    yield put(signIn.failure(e.data));
  }
}

function* putSignUp(action) {
  try {
    const { data } = yield call(
      AuthorizationApi.saveCredentials,
      action.payload
    );
    // localStorage.setItem("token", data.access_token);
    yield put(signUp.success(data));
    yield put(getProfileByUserId.request(action.payload.userId));
  } catch (e) {
    yield put(signUp.failure(e.data));
  }
}

function* updateAccountDetails(action) {
  try {
    const { data } = yield call(
      AuthorizationApi.saveCredentials,
      action.payload
    );
    // localStorage.setItem("token", data.access_token);
    yield put(updateAccount.success(data));
    yield put(getProfileByUserId.request(action.payload.userId));
    yield put(getAccountByUserId.request(action.payload.userId));
  } catch (e) {
    yield put(updateAccount.failure(e.data));
  }
}

function* fetchAccountByUserId(action) {
  try {
    const { data } = yield call(
      AuthorizationApi.accountFromUserId,
      action.payload
    );

    yield put(getAccountByUserId.success(data));
  } catch (e) {
    yield put(getAccountByUserId.failure(e.data));
  }
}

function* fetchProfileByUserId(action) {
  try {
    const { data } = yield call(
      AuthorizationApi.profileFromUserId,
      action.payload
    );

    yield put(getProfileByUserId.success(data));
    // favouriteCategoryId
    yield put(getBannerData.request(data.favouriteCategoryId));
  } catch (e) {
    yield put(getProfileByUserId.failure(e.data));
  }
}

function* fetchBannerData(action) {
  try {
    const { data } = yield call(AuthorizationApi.bannerData, action.payload);

    yield put(getBannerData.success(data));
  } catch (e) {
    yield put(getBannerData.failure(e.data));
  }
}

function* authorizationSaga() {
  yield takeLatest(SIGNIN.REQUEST, validateCredentials);
  yield takeLatest(SIGNUP.REQUEST, putSignUp);
  yield takeLatest(UPDATE_ACCOUNT.REQUEST, updateAccountDetails);
  yield takeLatest(GET_ACCOUNT_BY_USERID.REQUEST, fetchAccountByUserId);
  yield takeLatest(GET_PROFILE_BY_USERID.REQUEST, fetchProfileByUserId);
  yield takeLatest(GET_BANNER_DATA.REQUEST, fetchBannerData);
}

export default authorizationSaga;
