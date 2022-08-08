import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getCurrentConfirmatorData } from "../../helpers/api";
import { GET_CURRENT_CONFIRMATOR } from "./confirmator-types";


const getCurrentConfirmator = createAsyncThunk(
  GET_CURRENT_CONFIRMATOR,
  (managerId, { rejectWithValue }) => {
    return getCurrentConfirmatorData(managerId)
      .then(({data}) => data)
      .catch((data) => rejectWithValue(data.message));
  }
);

export { getCurrentConfirmator };
