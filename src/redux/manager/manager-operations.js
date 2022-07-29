import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_TABLE } from "./manager-types";
import { getCurrentWeek } from "../../helpers/api";


const getManagerCurrentWeek = createAsyncThunk(GET_TABLE, (managerId, {rejectWithValue}) => {
    return getCurrentWeek(managerId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
});

export { getManagerCurrentWeek };