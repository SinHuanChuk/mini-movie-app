import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import appReducers from "./reducers/reducers";

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: appReducers,
  middleware: [...defaultMiddleware, logger],
});

export default store;
