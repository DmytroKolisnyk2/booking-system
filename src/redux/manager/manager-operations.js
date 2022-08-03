import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {
  GET_TABLE,
  TYPE_SELECTION,
  TYPE_SLOT,
  MANAGER_LOADING,
  MANAGER_ERROR,
  GET_TABLE_WORK,
} from "./manager-types";
import { getCurrentWeek, getCurrentWorkWeek } from "../../helpers/api";

const getManagerCurrentWeek = createAsyncThunk(GET_TABLE, (managerId, { rejectWithValue }) => {
  return getCurrentWeek(managerId)
    .then((data) => data)
    .catch((data) => rejectWithValue(data.message));
});
const getManagerCurrentWorkWeek = createAsyncThunk(
  GET_TABLE_WORK,
  (managerId, { rejectWithValue }) => {
    return getCurrentWorkWeek(managerId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
  }
);

const changeTypeSelection = createAction(TYPE_SELECTION);
const changeStatusSlot = createAction(TYPE_SLOT);
const setManagerError = createAction(MANAGER_ERROR);
const setManagerLoading = createAction(MANAGER_LOADING);

export {
  getManagerCurrentWorkWeek,
  getManagerCurrentWeek,
  changeTypeSelection,
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
};
