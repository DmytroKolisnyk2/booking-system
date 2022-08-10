import { createReducer } from "@reduxjs/toolkit";
import {
  getCallerCurrentWeek,
  getCallerWeek,
  changeTypeSelection,
  changeStatusSlot,
  setCallerError,
  setCallerLoading,
  getCallerTable,
  getCallerCurrentWorkWeek,
} from "./caller-operations";
import { combineReducers } from "redux";

const initialState = [
  [
    { time: 8, color: 0 },
    { time: 9, color: 0 },
    { time: 10, color: 0 },
    { time: 11, color: 0 },
    { time: 12, color: 0 },
    { time: 13, color: 0 },
    { time: 14, color: 0 },
    { time: 15, color: 0 },
    { time: 16, color: 0 },
    { time: 17, color: 0 },
    { time: 18, color: 0 },
    { time: 19, color: 0 },
    { time: 20, color: 0 },
    { time: 21, color: 0 },
    { time: 22, color: 0 },
  ],
  [
    { time: 8, color: 0 },
    { time: 9, color: 0 },
    { time: 10, color: 0 },
    { time: 11, color: 0 },
    { time: 12, color: 0 },
    { time: 13, color: 0 },
    { time: 14, color: 0 },
    { time: 15, color: 0 },
    { time: 16, color: 0 },
    { time: 17, color: 0 },
    { time: 18, color: 0 },
    { time: 19, color: 0 },
    { time: 20, color: 0 },
    { time: 21, color: 0 },
    { time: 22, color: 0 },
  ],
  [
    { time: 8, color: 0 },
    { time: 9, color: 0 },
    { time: 10, color: 0 },
    { time: 11, color: 0 },
    { time: 12, color: 0 },
    { time: 13, color: 0 },
    { time: 14, color: 0 },
    { time: 15, color: 0 },
    { time: 16, color: 0 },
    { time: 17, color: 0 },
    { time: 18, color: 0 },
    { time: 19, color: 0 },
    { time: 20, color: 0 },
    { time: 21, color: 0 },
    { time: 22, color: 0 },
  ],
  [
    { time: 8, color: 0 },
    { time: 9, color: 0 },
    { time: 10, color: 0 },
    { time: 11, color: 0 },
    { time: 12, color: 0 },
    { time: 13, color: 0 },
    { time: 14, color: 0 },
    { time: 15, color: 0 },
    { time: 16, color: 0 },
    { time: 17, color: 0 },
    { time: 18, color: 0 },
    { time: 19, color: 0 },
    { time: 20, color: 0 },
    { time: 21, color: 0 },
    { time: 22, color: 0 },
  ],
  [
    { time: 8, color: 0 },
    { time: 9, color: 0 },
    { time: 10, color: 0 },
    { time: 11, color: 0 },
    { time: 12, color: 0 },
    { time: 13, color: 0 },
    { time: 14, color: 0 },
    { time: 15, color: 0 },
    { time: 16, color: 0 },
    { time: 17, color: 0 },
    { time: 18, color: 0 },
    { time: 19, color: 0 },
    { time: 20, color: 0 },
    { time: 21, color: 0 },
    { time: 22, color: 0 },
  ],
  [
    { time: 8, color: 0 },
    { time: 9, color: 0 },
    { time: 10, color: 0 },
    { time: 11, color: 0 },
    { time: 12, color: 0 },
    { time: 13, color: 0 },
    { time: 14, color: 0 },
    { time: 15, color: 0 },
    { time: 16, color: 0 },
    { time: 17, color: 0 },
    { time: 18, color: 0 },
    { time: 19, color: 0 },
    { time: 20, color: 0 },
    { time: 21, color: 0 },
    { time: 22, color: 0 },
  ],
  [
    { time: 8, color: 0 },
    { time: 9, color: 0 },
    { time: 10, color: 0 },
    { time: 11, color: 0 },
    { time: 12, color: 0 },
    { time: 13, color: 0 },
    { time: 14, color: 0 },
    { time: 15, color: 0 },
    { time: 16, color: 0 },
    { time: 17, color: 0 },
    { time: 18, color: 0 },
    { time: 19, color: 0 },
    { time: 20, color: 0 },
    { time: 21, color: 0 },
    { time: 22, color: 0 },
  ],
];

const slots = createReducer(initialState, {
  [getCallerCurrentWeek.fulfilled]: (_, action) => action.payload.slots,
  [getCallerWeek.fulfilled]: (_, action) => action.payload.slots,
  [changeStatusSlot]: (state, action) => {
    state.map((day, dayIndex) =>
      day.map((item, hourIndex) => {
        return dayIndex === action.payload.dayIndex &&
          hourIndex === action.payload.hourIndex
          ? (item.color = action.payload.colorId)
          : item;
      })
    );
    return state;
  },
});

const weekId = createReducer("", {
  [getCallerCurrentWeek.fulfilled]: (_, action) =>
    action.payload.current_week_id,
  [getCallerWeek.fulfilled]: (_, action) => action.payload.current_week_id,
});

const weekDate = createReducer("Sun Sep 1 1939 04:09:08 GMT+0300", {
  [getCallerCurrentWeek.fulfilled]: (_, action) =>
    action.payload.current_week_date_start,
  [getCallerWeek.fulfilled]: (_, action) =>
    action.payload.current_week_date_start,
});

const typeActionSelection = createReducer("", {
  [changeTypeSelection]: (_, action) => action.payload,
});

const CallerError = createReducer("", {
  [getCallerCurrentWeek.rejected]: (_, action) => action.payload,
  [getCallerWeek.rejected]: (_, action) => action.payload,
  [getCallerTable.rejected]: (_, action) => action.payload,
  [setCallerError]: (_, action) => action.payload,
  [getCallerCurrentWeek.pending]: (_, action) => "",
  [getCallerWeek.pending]: (_, action) => "",
  [getCallerTable.pending]: (_, action) => "",
  [setCallerLoading]: (_, action) => "",
});

const CallerLoading = createReducer(false, {
  [getCallerCurrentWeek.pending]: (_, action) => true,
  [getCallerWeek.pending]: (_, action) => true,
  [getCallerTable.pending]: (_, action) => true,
  [setCallerLoading]: (_, action) => action.payload,
  [getCallerCurrentWeek.rejected]: (_, action) => false,
  [getCallerCurrentWeek.fulfilled]: (_, action) => false,
  [getCallerWeek.rejected]: (_, action) => false,
  [getCallerWeek.fulfilled]: (_, action) => false,
  [getCallerTable.rejected]: (_, action) => false,
  [getCallerTable.fulfilled]: (_, action) => false,
});

const week = combineReducers({
  weekId,
  weekDate,
  slots,
});

export default combineReducers({
  typeActionSelection,
  CallerError,
  CallerLoading,
  week,
});
