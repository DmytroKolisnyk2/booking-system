import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentConfirmedData,
  getConfirmedWeekData,
} from "../../helpers/confirmation/confirmed";
import { error } from "@pnotify/core";
import {
  DECREASE_DAY,
  FIRST_HALF,
  GET_CURRENT_CONFIRMED,
  GET_WEEK_CONFIRMED,
  INCREASE_DAY,
  SECOND_HALF,
} from "./confirmed-types";
import { defaults } from "@pnotify/core";
defaults.delay = 1000;

const getCurrentConfirmed = createAsyncThunk(
  GET_CURRENT_CONFIRMED,
  (managerId, { rejectWithValue }) => {
    return getCurrentConfirmedData(managerId)
      .then(({ data }) => data)
      .catch((data) => {
        error(`${data.response.data.message ? data.response.data.message : data.message}`);
        return rejectWithValue(data.message);
      });
  }
);
const getConfirmedWeek = createAsyncThunk(
  GET_WEEK_CONFIRMED,
  ({ currentDayId, currentWeekId, half }, { rejectWithValue }) => {
    return getConfirmedWeekData(currentWeekId, currentDayId, half)
      .then(({ data }) => data)
      .catch((data) => {
        error(`${data.response.data.message ? data.response.data.message : data.message}`);
        return rejectWithValue(data.message);
      });
  }
);
const increaseDay = createAction(INCREASE_DAY);
const decreaseDay = createAction(DECREASE_DAY);
const firstHalf = createAction(FIRST_HALF);
const secondHalf = createAction(SECOND_HALF);

export {
  firstHalf,
  secondHalf,
  decreaseDay,
  increaseDay,
  getCurrentConfirmed,
  getConfirmedWeek,
};
