import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  decreaseDay,
  firstHalf,
  getConfirmatorWeek,
  getCurrentConfirmator,
  increaseDay,
  secondHalf,
} from "./confirmator-operations";

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
  [firstHalf.type]: (state, _) => ({ ...state, half: 1 }),
  [secondHalf.type]: (state, _) => ({ ...state, half: 2 }),
  [increaseDay.type]: (state, _) => {
    if (state.day === 6) {
      return { ...state, day: 1, week_id: state.week_id + 1 };
    }
    return { ...state, day: state.day + 1 };
  },
  [decreaseDay.type]: (state, _) => {
    if (state.day === 0) {
      return { ...state, day: 6, week_id: state.week_id - 1 };
    }
    return { ...state, day: state.day - 1 };
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
  [getCurrentConfirmator.pending]: () => "",
  [getConfirmatorWeek.pending]: () => "",
  [getConfirmatorWeek.rejected]: (_, { payload }) => payload,
  [getCurrentConfirmator.rejected]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getCurrentConfirmator.pending]: () => true,
  [getCurrentConfirmator.fulfilled]: () => false,
  [getCurrentConfirmator.rejected]: () => false,
  [getConfirmatorWeek.pending]: () => true,
  [getConfirmatorWeek.fulfilled]: () => false,
  [getConfirmatorWeek.rejected]: () => false,
});

export default combineReducers({
  appointments,
  loading,
  error,
  date,
});
