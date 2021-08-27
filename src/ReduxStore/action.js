import { GETDETAILS,ADDUSERDETAILS } from "./actionType"

export const getDetails = (payload) => {
    return {
      type: GETDETAILS,
      payload: payload,
    };
}

export const getUsers = (payload) => {
  return {
    type: ADDUSERDETAILS,
    payload,
  };
};