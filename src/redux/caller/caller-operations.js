import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {
  GET_TABLE,
  TYPE_SELECTION,
  TYPE_SLOT,
  CALLER_LOADING,
  CALLER_ERROR,
  GET_WEEK,
  GET_TABLE_WORK,
} from "./caller-types";
import {
  getCallerCurrentWeek2,
  getWeekTable,
  updateSlot,
  getCurrentWorkWeek,
} from "../../helpers/api";

const changeTypeSelection = createAction(TYPE_SELECTION);
const changeStatusSlot = createAction(TYPE_SLOT);
const setCallerError = createAction(CALLER_ERROR);
const setCallerLoading = createAction(CALLER_LOADING);

const getCallerCurrentWeek = createAsyncThunk(
  GET_WEEK,
  (callerId, { rejectWithValue }) => {
    return getCallerCurrentWeek2(callerId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
  }
);

// const getCallerWeek = createAsyncThunk(GET_WEEK, ({ callerId, weekId }, { rejectWithValue }) => {
//   return getWeek(callerId, weekId)
//     .then((data) => data)
//     .catch((data) => rejectWithValue(data.message));
// });

const getCallerTable = createAsyncThunk(
  GET_TABLE,
  ({ callerId, weekId }, { rejectWithValue }) => {
    return getWeekTable(callerId)
      .then((data) => {
        const template = JSON.parse(data.data.template);
        template.map((day, dayIndex) =>
          day.map((item, hourIndex) => {
            return item.color === 1 || item.color === 2
              ? updateSlot(
                  callerId,
                  weekId,
                  dayIndex,
                  template[dayIndex][hourIndex].time,
                  item.color
                )
              : item;
          })
        );
        return template;
      })
      .catch((data) => rejectWithValue(data.message));
  }
);

const getCallerCurrentWorkWeek = createAsyncThunk(
  GET_TABLE_WORK,
  (callerId, { rejectWithValue }) => {
    return getCurrentWorkWeek(callerId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
  }
);

export {
  getCallerCurrentWorkWeek,
  getCallerCurrentWeek,
  changeTypeSelection,
  changeStatusSlot,
  setCallerError,
  setCallerLoading,
  // getCallerWeek,
  getCallerTable,
};