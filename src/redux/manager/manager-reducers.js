import { createReducer } from "@reduxjs/toolkit";
import {
  getManagerCurrentWeek,
  changeTypeSelection,
  changeStatusSlot,
} from "./manager-operations";
import { combineReducers } from "redux";

const initialState = {
  current_week_date_start: "Sun Sep 1 1939 22:09:08 GMT+0300",
  current_week_id: null,
  manager_id: null,
  slots: [
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
  ],
};

const week = createReducer(initialState, {
  [getManagerCurrentWeek.fulfilled]: (_, action) => action.payload,
  [changeStatusSlot]: (state, action) => {
    state.slots.map((day, dayIndex) =>
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

const typeActionSelection = createReducer('', {
  [changeTypeSelection]: (_, action) => action.payload,
})

export default combineReducers({
  week,
  typeActionSelection
});
