import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentConfirmatorData, getConfirmatorWeekData } from "../../helpers/api";
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
      .catch((data) => rejectWithValue(data.message));
  }
);
const getConfirmatorWeek = createAsyncThunk(
  GET_WEEK_CONFIRMATOR,
  ({ currentDayId, currentWeekId, half }, { rejectWithValue }) => {
    return getConfirmatorWeekData(currentWeekId, currentDayId, half)
      .then(({ data }) => data)
      .catch((data) => rejectWithValue(data.message));
  }
);
const increaseDay = createAction(INCREASE_DAY);
const decreaseDay = createAction(DECREASE_DAY);

export { decreaseDay, increaseDay, getCurrentConfirmator, getConfirmatorWeek };
