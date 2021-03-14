export const initialState = {
  isLoggedIn: false, //로그인 시도중
  isLoggingIn: false,
  isLoggingOut: false, //로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export const loginSuccessAction = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

export const loginFailureAction = (data) => {
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

export const logOutSuccessAction = (data) => {
  return {
    type: "LOG_OUT_SUCCESS",
    data,
  };
};

export const logOutFailureAction = (data) => {
  return {
    type: "LOG_OUT_FAILURE",
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      console.log("reducer login");
      return {
        ...state,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        isLoggingOut: false,
        me: { ...action.data, nickname: "zerocho" },
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: true,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggedIn: true,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;
