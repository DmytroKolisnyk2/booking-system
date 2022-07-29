import { createReducer } from "@reduxjs/toolkit";
import {
  getManagerCurrentWeek,
} from "./manager/manager-operations";

const error = createReducer("", {
  [getManagerCurrentWeek.rejected]: (_, action) => action.payload,
  [getManagerCurrentWeek.pending]: (_, action) => "",
});

const loading = createReducer(false, {
  [getManagerCurrentWeek.pending]: (_, action) => true,
  [getManagerCurrentWeek.rejected]: (_, action) => false,
  [getManagerCurrentWeek.fulfilled]: (_, action) => false,
});

export {loading, error}