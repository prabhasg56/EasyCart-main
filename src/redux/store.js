import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

export const baseUrl = "https://dummyjson.com";

export const store = legacy_createStore(reducer);