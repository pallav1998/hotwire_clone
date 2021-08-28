import { GETDETAILS, ADDUSERDETAILS, LOGINSTATUS } from "./actionType";

const initState = { data: [], user: [], Loginstatus: false };

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
    default: {
      return state;
    }
  }
};
