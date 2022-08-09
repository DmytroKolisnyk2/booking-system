import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getConfirmatorWeek, getCurrentConfirmator, increaseDay } from "./confirmator-operations";

const INITIAL_WEEK = {
  date: "Tue, 09 Aug 2022 00:00:00 GMT",
  day: 1,
  half: 1,
  week_id: 2,
};

const appointments = createReducer([], {
  [getCurrentConfirmator.fulfilled]: (_, { payload }) => payload.appointments,
  [getConfirmatorWeek.fulfilled]: (_, { payload }) => payload.appointments,
});

const date = createReducer(INITIAL_WEEK, {
  [increaseDay.type]: (state, _) => {
    if (state.day === 7) {
      return { ...state, day: 1, week_id: state.week_id + 1 };
    }
    return { ...state, day: state.day + 1 };
  },
  [getCurrentConfirmator.fulfilled]: (_, { payload }) => ({
    date: payload.date,
    day: payload.day,
    half: payload.half,
    week_id: payload.week_id,
  }),
  [getConfirmatorWeek.fulfilled]: (_, { payload }) => ({
    date: payload.date,
    day: payload.day,
    half: payload.half,
    week_id: payload.week_id,
  }),
});

const error = createReducer("", {
  [getCurrentConfirmator.rejected]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [getCurrentConfirmator.pending]: () => true,
  [getCurrentConfirmator.fulfilled]: () => false,
  [getCurrentConfirmator.rejected]: () => false,
});

export default combineReducers({
  appointments,
  loading,
  error,
  date,
});
