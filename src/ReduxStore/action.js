import { GETDETAILS, ADDUSERDETAILS, LOGINSTATUS } from "./actionType";

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

export const getStatus = (payload) => {
  return {
    type: LOGINSTATUS,
    payload: payload,
  };
};
