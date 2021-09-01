import {
  GETDETAILS,
  ADDUSERDETAILS,
  LOGINSTATUS,
  UPDATE_RUNNING_USER,
  LOGIN_FAILED,
  LOGOUT_USER,
} from "./actionType";

const initState = {
  data: [],
  user: [],
  Loginstatus: false,
  runningUser: {},
  loginError: false,
};

export const reducerFunction = (state = initState, { type, payload }) => {
  switch (type) {
    case GETDETAILS:
      return {
        ...state,
        data: payload,
      };
    case ADDUSERDETAILS:
      const updateData = [...state.data, payload];
      return {
        ...state,
        user: updateData,
      };
    case LOGINSTATUS:
      return {
        ...state,
        Loginstatus: payload,
      };
    case UPDATE_RUNNING_USER:
      return {
        ...state,
        runningUser: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginError: payload,
      };
    case LOGOUT_USER:
      console.log("logout user reducer");
      return {
        ...state,
        Loginstatus: false,
        runningUser: {},
        data: [],
      };
    default: {
      return state;
    }
  }
};
