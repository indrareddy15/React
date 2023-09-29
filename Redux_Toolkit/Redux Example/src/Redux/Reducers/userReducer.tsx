import { placeOrder } from "../../Pages/globals";
import {
  UPDATE_TAB,
  UPDATE_USER_LOG_IN,
  UPDATE_USER_LOG_OUT,
} from "../Actions/totalActions";

const initialState = {
  loggedIn: false,
  username: "",
  password: "",
  tab: placeOrder,
};
const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_USER_LOG_IN:
      return {
        ...state,
        loggedIn: true,
        username: action.username,
        password: action.password,
        tab: placeOrder,
      };
    case UPDATE_USER_LOG_OUT:
      return initialState;
    case UPDATE_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    default:
      return state;
  }
};
export default userReducer;
