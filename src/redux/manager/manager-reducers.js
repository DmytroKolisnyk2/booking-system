import { createReducer } from "@reduxjs/toolkit";
import {
  getManagerCurrentWeek,
  getManagerWeek,
  changeTypeSelection,
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerTable,
  setSavedTemplate,
  getManagerCurrentWorkWeek,
  getManagerWorkWeek
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
    { time: 22, color: 0 }
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
    { time: 22, color: 0 }
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
    { time: 22, color: 0 }
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
    { time: 22, color: 0 }
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
    { time: 22, color: 0 }
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
    { time: 22, color: 0 }
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
    { time: 22, color: 0 }
  ]
];



const slots = createReducer(initialState, {
  [getManagerCurrentWeek.fulfilled]: (_, action) => action.payload.slots,
  [getManagerWeek.fulfilled]: (_, action) => action.payload.slots,
  [getManagerTable.fulfilled]: (_, action) => action.payload,
  [getManagerCurrentWorkWeek.fulfilled]: (_, action) => action.payload.slots,
  [getManagerWorkWeek.fulfilled]: (_, action) => action.payload.slots,
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
  [getManagerCurrentWeek.fulfilled]: (_, action) =>
    action.payload.current_week_id,
  [getManagerWeek.fulfilled]: (_, action) => action.payload.current_week_id,
  [getManagerCurrentWorkWeek.fulfilled]: (_, action) =>
    action.payload.current_week_id,
  [getManagerWorkWeek.fulfilled]: (_, action) => action.payload.current_week_id,
});

const weekDate = createReducer("Sun Sep 1 1939 04:09:08 GMT+0300", {
  [getManagerCurrentWeek.fulfilled]: (_, action) =>
    action.payload.current_week_date_start,
  [getManagerCurrentWorkWeek.fulfilled]: (_, action) =>
    action.payload.current_week_date_start,
  [getManagerWeek.fulfilled]: (_, action) =>
    action.payload.current_week_date_start,
  [getManagerWorkWeek.fulfilled]: (_, action) =>
    action.payload.current_week_date_start,
});

const typeActionSelection = createReducer("", {
  [changeTypeSelection]: (_, action) => action.payload,
});

const managerError = createReducer("", {
  [getManagerCurrentWeek.rejected]: (_, action) => action.payload,
  [getManagerWeek.rejected]: (_, action) => action.payload,
  [getManagerCurrentWorkWeek.rejected]: (_, action) => action.payload,
  [getManagerWorkWeek.rejected]: (_, action) => action.payload,
  [getManagerTable.rejected]: (_, action) => action.payload,
  [setManagerError]: (_, action) => action.payload,
  [getManagerCurrentWeek.pending]: (_, action) => "",
  [getManagerWeek.pending]: (_, action) => "",
  [getManagerCurrentWorkWeek.pending]: (_, action) => '',
  [getManagerWorkWeek.pending]: (_, action) => '',
  [getManagerTable.pending]: (_, action) => "",
  [setManagerLoading]: (_, action) => "",
});

const managerLoading = createReducer(false, {
  [getManagerCurrentWeek.pending]: (_, action) => true,
  [getManagerWeek.pending]: (_, action) => true,
  [getManagerCurrentWorkWeek.pending]: (_, action) => true,
  [getManagerWorkWeek.pending]: (_, action) => true,
  [getManagerTable.pending]: (_, action) => true,
  [setManagerLoading]: (_, action) => action.payload,
  [getManagerCurrentWeek.rejected]: (_, action) => false,
  [getManagerCurrentWeek.fulfilled]: (_, action) => false,
  [getManagerWeek.rejected]: (_, action) => false,
  [getManagerWeek.fulfilled]: (_, action) => false,
  [getManagerTable.rejected]: (_, action) => false,
  [getManagerTable.fulfilled]: (_, action) => false,
  [getManagerCurrentWorkWeek.rejected]: (_, action) => false,
  [getManagerWorkWeek.rejected]: (_, action) => false,
  [getManagerCurrentWorkWeek.fulfilled]: (_, action) => false,
  [getManagerWorkWeek.fulfilled]: (_, action) => false,
});

const initialTemplate = { text: "No template", date: "" };

const savedTemplate = createReducer(initialTemplate, {
  [setSavedTemplate]: (_, action) => action.payload,
  [setManagerError]: (_, action) => initialTemplate,
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
  savedTemplate,
});
