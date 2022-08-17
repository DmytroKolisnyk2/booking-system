import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { success, error } from "@pnotify/core";
import {
  GET_TABLE,
  TYPE_SELECTION,
  TYPE_SLOT,
  MANAGER_LOADING,
  MANAGER_ERROR,
  GET_WEEK,
  SAVE_TABLE,
  GET_TABLE_WORK,
} from "./manager-types";
import {
  getCurrentWeek,
  getWeek,
  getWeekTable,
  updateSlot,
  getCurrentWorkWeek,
  getWorkWeek,
} from "../../helpers/week/week";
import { defaults } from "@pnotify/core";
defaults.delay = 1000;

const changeTypeSelection = createAction(TYPE_SELECTION);
const changeStatusSlot = createAction(TYPE_SLOT);
const setManagerError = createAction(MANAGER_ERROR);
const setManagerLoading = createAction(MANAGER_LOADING);
const setSavedTemplate = createAction(SAVE_TABLE);

const getManagerCurrentWeek = createAsyncThunk(
  GET_WEEK,
  (managerId, { rejectWithValue }) => {
    return getCurrentWeek(managerId)
      .then((data) => data)
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

const getManagerWeek = createAsyncThunk(
  GET_WEEK,
  ({ managerId, weekId }, { rejectWithValue }) => {
    return getWeek(managerId, weekId)
      .then((data) => data)
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

const getManagerWorkWeek = createAsyncThunk(
  GET_WEEK,
  ({ managerId, weekId }, { rejectWithValue }) => {
    return getWorkWeek(managerId, weekId)
      .then((data) => data)
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

const getManagerTable = createAsyncThunk(
  GET_TABLE,
  ({ managerId, weekId }, { rejectWithValue, dispatch }) => {
    return getWeekTable(managerId)
      .then((data) => {
        dispatch(
          setSavedTemplate({
            text: "Template created",
            date: data.data.saved_date,
          })
        );
        const template = JSON.parse(data.data.template);
        template.map((day, dayIndex) =>
          day.map((item, hourIndex) => {
            return item.color === 1 || item.color === 2
              ? updateSlot(
                  managerId,
                  weekId,
                  dayIndex,
                  template[dayIndex][hourIndex].time,
                  item.color
                )
              : item;
          })
        );
        success("Saved template successfully loaded");
        return template;
      })
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

const getManagerCurrentWorkWeek = createAsyncThunk(
  GET_TABLE_WORK,
  (managerId, { rejectWithValue }) => {
    return getCurrentWorkWeek(managerId)
      .then((data) => data)
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

export {
  getManagerCurrentWorkWeek,
  getManagerCurrentWeek,
  changeTypeSelection,
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerWeek,
  getManagerTable,
  setSavedTemplate,
  getManagerWorkWeek,
};
