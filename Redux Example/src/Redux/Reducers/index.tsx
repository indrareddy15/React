import { combineReducers } from "redux";
import AllOrdersReducer from "./AllOrdersReducer";
import ordersReducer from "./ordersReducer";
import userReducer from "./userReducer";


export default combineReducers({
  user:userReducer,
  cart:ordersReducer,
  allOrders:AllOrdersReducer
  })