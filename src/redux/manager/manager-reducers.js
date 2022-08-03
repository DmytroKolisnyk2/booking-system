import { createReducer } from "@reduxjs/toolkit";
import {
  getManagerCurrentWeek,
  changeTypeSelection,
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerCurrentWorkWeek,
} from "./manager-operations";
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
  [getManagerCurrentWeek.fulfilled]: (_, action) => action.payload.slots,
  [getManagerCurrentWorkWeek.fulfilled]: (_, action) => {
    console.log(action.payload.slots);
    return action.payload.slots
  },
  [changeStatusSlot]: (state, action) => {
    state.map((day, dayIndex) =>
      day.map((item, hourIndex) => {
        return dayIndex === action.payload.dayIndex && hourIndex === action.payload.hourIndex
          ? (item.color = action.payload.colorId)
          : item;
      })
    );
    return state;
  },
});

const weekId = createReducer("", {
  [getManagerCurrentWeek.fulfilled]: (_, action) =>
    action.payload.current_week_id,
});

const weekDate = createReducer("Sun Sep 1 1939 22:09:08 GMT+0300", {
  [getManagerCurrentWeek.fulfilled]: (_, action) =>
    action.payload.current_week_date_start,
});

const typeActionSelection = createReducer("", {
  [changeTypeSelection]: (_, action) => action.payload,
});

const managerError = createReducer("", {
  [getManagerCurrentWeek.rejected]: (_, action) => action.payload,
  [setManagerError]: (_, action) => action.payload,
  [getManagerCurrentWeek.pending]: (_, action) => "",
  [setManagerLoading]: (_, action) => '',
});

const managerLoading = createReducer(false, {
  [getManagerCurrentWeek.pending]: (_, action) => true,
  [setManagerLoading]: (_, action) => action.payload,
  [getManagerCurrentWeek.rejected]: (_, action) => false,
  [getManagerCurrentWeek.fulfilled]: (_, action) => false,
});

const week = combineReducers({
  weekId,
  weekDate,
  slots,
});

export default combineReducers({
  typeActionSelection,
  managerError,
  managerLoading,
  week,
});
