import { combineReducers } from "redux";
import users from "./users";

export const rootReducer = combineReducers({
  [users.name]: users.reducer,
});

export default rootReducer;
