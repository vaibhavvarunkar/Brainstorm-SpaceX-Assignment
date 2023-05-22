import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import shipsSlice from "./Slices/Ships/shipsSlice";

//combines reducers
const reducers = combineReducers({
  ships:shipsSlice.reducer
});

//exporting the store for provider in app.tsx
export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
