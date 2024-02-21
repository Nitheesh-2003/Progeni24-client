import { combineReducers } from "redux";
import authReducer from "@reducers/AuthReducer";
import postReducer from "@reducers/postReducer";

export const reducers=combineReducers({authReducer,postReducer});