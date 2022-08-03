import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {
  GET_TABLE,
  TYPE_SELECTION,
  TYPE_SLOT,
  MANAGER_LOADING,
  MANAGER_ERROR,
  GET_WEEK,
} from "./manager-types";
import { getCurrentWeek, getWeek } from "../../helpers/api";

const getManagerCurrentWeek = createAsyncThunk(
  GET_WEEK,
  (managerId, { rejectWithValue }) => {
    return getCurrentWeek(managerId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
  }
);

const getManagerWeek = createAsyncThunk(
  GET_WEEK,
  ({ managerId, weekId }, { rejectWithValue }) => {
    return getWeek(managerId, weekId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
  }
);

const changeTypeSelection = createAction(TYPE_SELECTION);
const changeStatusSlot = createAction(TYPE_SLOT);
const setManagerError = createAction(MANAGER_ERROR);
const setManagerLoading = createAction(MANAGER_LOADING);

export {
  getManagerCurrentWeek,
  changeTypeSelection,
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerWeek,
};
