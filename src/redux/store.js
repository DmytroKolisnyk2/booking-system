import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  // persistReducer,
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import tableReducers from './manager/manager-reducers';
import {error, loading} from './reducers';
// const persistConfig = {
//   key: "booking-system",
//   storage,
//   blacklist: ['token'],
// };


// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    manager: tableReducers,
    error,
    loading,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
