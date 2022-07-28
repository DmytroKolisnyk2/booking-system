import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_TABLE,  SAVE_TABLE} from "./manager-types";
import { getCurrentWeek, saveTable } from "../../helpers/api";


const getManagerCurrentWeek = createAsyncThunk(GET_TABLE, (managerId, {rejectWithValue}) => {
    return getCurrentWeek(managerId)
      .then((data) => data)
      .catch((data) => rejectWithValue(data.message));
});

const saveManagerTable = createAsyncThunk(SAVE_TABLE, (data, {rejectWithValue}) => {
    return saveTable(data.managerId, data.tableCredentials).then(data => data).catch(data => rejectWithValue(data.message))
});

export { getManagerCurrentWeek, saveManagerTable };