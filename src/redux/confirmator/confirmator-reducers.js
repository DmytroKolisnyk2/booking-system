import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getCurrentConfirmator } from "./confirmator-operations";

const appointments = createReducer([], {
  [getCurrentConfirmator.fulfilled]: (_, { payload }) => payload.appointments,
});

const error = createReducer("", {
  [getCurrentConfirmator.rejected]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
});
const loading = createReducer(false, {
  [getCurrentConfirmator.pending]: () => true,
  [getCurrentConfirmator.fulfilled]: () => false,
  [getCurrentConfirmator.rejected]: () => false,
});

export default combineReducers({
  appointments,
  loading,
  error
});
