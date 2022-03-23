const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const action = (type, data = {}) => {
  switch (type) {
    case "SIGNIN_SUCCESS":
      alert("Sign In successfully!!");
      break;
    case "SIGNIN_FAILURE":
      alert("Unable to Login, check your credentials." + data.status);
      break;
    case "SIGNUP_SUCCESS":
      alert("SignUp successfully!!");
      break;
    case "SIGNUP_FAILURE":
      alert("SignUp Failed!!");
      break;
    case "UPDATE_ACCOUNT_SUCCESS":
      alert("Account Updated successfully!!");
      break;
    case "UPDATE_ACCOUNT_FAILURE":
      alert("Account Updation Failed!!");
      break;
  }

  return { type, payload: data };
};
