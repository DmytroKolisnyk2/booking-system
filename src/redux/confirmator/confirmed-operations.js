import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentConfirmedData,
  getConfirmedWeekData,
} from "../../helpers/confirmation/confirmed"; //отримання ключових даних


import { error } from "@pnotify/core";
import {
  DECREASE_DAY,
  FIRST_HALF,
  GET_CURRENT_CONFIRMED,
  GET_WEEK_CONFIRMED,
  INCREASE_DAY,
  SECOND_HALF,
} from "./confirmator-types";
import { defaults } from "@pnotify/core";
defaults.delay = 1000;

const getCurrentConfirmed = createAsyncThunk(
  GET_CURRENT_CONFIRMATOR,
  (managerId, { rejectWithValue }) => {
    return getCurrentConfirmedData(managerId)
      .then(({ data }) => data)
      .catch((data) => {
        error(`${data.response.data.message ? data.response.data.message : data.message}`);
        return rejectWithValue(data.message);
      });
  }
);
const getConfirmatorWeek = createAsyncThunk(
  GET_WEEK_CONFIRMATOR,
  ({ currentDayId, currentWeekId, half }, { rejectWithValue }) => {
    return getConfirmatorWeekData(currentWeekId, currentDayId, half)
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
  getCurrentConfirmator,
  getConfirmatorWeek,
};
