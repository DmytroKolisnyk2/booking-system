import { createReducer } from "@reduxjs/toolkit";
import {
  getManagerCurrentWeek,
  saveManagerTable,
} from "./manager/manager-operations";

const error = createReducer("", {
  [getManagerCurrentWeek.rejected]: (_, action) => action.payload,
  [saveManagerTable.rejected]: (_, action) => action.payload,
  [getManagerCurrentWeek.pending]: (_, action) => "",
  [saveManagerTable.pending]: (_, action) => "",
});

const loading = createReducer(false, {
  [getManagerCurrentWeek.pending]: (_, action) => true,
  [saveManagerTable.pending]: (_, action) => true,
  [getManagerCurrentWeek.rejected]: (_, action) => false,
  [saveManagerTable.rejected]: (_, action) => false,
  [getManagerCurrentWeek.fulfilled]: (_, action) => false,
  [saveManagerTable.fulfilled]: (_, action) => false,
});

export {loading, error}