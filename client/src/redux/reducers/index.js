//rootreducer: its going to hold all reducer details at one place
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";
import searchReducer from "./searchReducer";
const rootReducers = combineReducers({
  authReducer,
  alertReducer,
  profileReducer,
  postReducer,
  searchReducer
});

export default rootReducers;
