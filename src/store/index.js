import { rootReducer } from "../reducers/reducer";
import { legacy_createStore } from "redux";

export const store = legacy_createStore(rootReducer)