import axios from "axios";
import { link } from "../utils/Localstorage";
import {
  GETDETAILS,
  ADDUSERDETAILS,
  LOGINSTATUS,
  UPDATE_RUNNING_USER,
  LOGIN_FAILED,
  LOGOUT_USER,
} from "./actionType";

export const getDetails = (payload) => {
  return {
    type: GETDETAILS,
    payload: payload,
  };
};

export const getUsers = (payload) => {
  return {
    type: ADDUSERDETAILS,
    payload,
  };
};

export const UpdateRunningUser = (payload) => {
  return {
    type: UPDATE_RUNNING_USER,
    payload,
  };
};
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    axios
      .get(`${link}/userData`)
      .then(({ data }) => {
        let bool = false;
        for (let i = 0; i < data.length; i++) {
          if (data[i].Email === email && data[i].Password === password) {
            bool = true;
            dispatch(getStatus(true));
            dispatch(UpdateRunningUser(data[i]));
            dispatch(loginFailed(false));
            break;
          }
        }
        if (!bool) {
          dispatch(loginFailed(true));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logOutUser = (payload) => {
  // console.log("action kjbbbk")
  return {
    type: LOGOUT_USER,
    payload,
  };
};
export const loginFailed = (payload) => {
  return {
    type: LOGIN_FAILED,
    payload,
  };
};
export const getStatus = (payload) => {
  return {
    type: LOGINSTATUS,
    payload: payload,
  };
};
