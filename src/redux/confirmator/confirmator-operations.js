import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentConfirmatorData,
  getConfirmatorWeekData,
} from "../../helpers/confirmation/confirmation";
import { success, error } from "@pnotify/core";
import {
  DECREASE_DAY,
  GET_CURRENT_CONFIRMATOR,
  GET_WEEK_CONFIRMATOR,
  INCREASE_DAY,
} from "./confirmator-types";

const getCurrentConfirmator = createAsyncThunk(
  GET_CURRENT_CONFIRMATOR,
  (managerId, { rejectWithValue }) => {
    return getCurrentConfirmatorData(managerId)
      .then(({ data }) => data)
      .catch((data) => {
        error(
          `${
            data.response.data.message
              ? data.response.data.message
              : data.message
          }`
        );
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
        error(
          `${
            data.response.data.message
              ? data.response.data.message
              : data.message
          }`
        );
        return rejectWithValue(data.message);
      });
  }
);
const increaseDay = createAction(INCREASE_DAY);
const decreaseDay = createAction(DECREASE_DAY);

export { decreaseDay, increaseDay, getCurrentConfirmator, getConfirmatorWeek };
