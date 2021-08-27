import { GETDETAILS, ADDUSERDETAILS } from "./actionType";

const initState = { data: [], user: [] };

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
    default: {
      return state;
    }
  }
};
