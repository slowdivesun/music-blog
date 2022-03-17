import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import review from "./review";
import genre from "./genre";
import list from "./list";

export default combineReducers({ alert, auth, profile, review, genre, list });
