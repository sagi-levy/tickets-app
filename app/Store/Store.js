"use client";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Import thunk middleware for async actions
import ticketsSlice from "./ticketsSlice"; // Import ticket reducer

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
  },
});
export default store;
