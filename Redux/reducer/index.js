import { combineReducers } from "redux";
import reducer from "./fetchdata.reducer";

const combinedReducer = combineReducers({
  reducer,
});

export default combinedReducer;
