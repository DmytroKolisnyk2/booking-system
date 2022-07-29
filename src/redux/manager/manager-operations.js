import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { GET_TABLE, TYPE_SELECTION } from "./manager-types";
import { getCurrentWeek } from "../../helpers/api";


const getManagerCurrentWeek = createAsyncThunk(GET_TABLE, (managerId, {rejectWithValue}) => {
    return getCurrentWeek(managerId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
});

const changeTypeSelection = createAction(TYPE_SELECTION);

export { getManagerCurrentWeek, changeTypeSelection };