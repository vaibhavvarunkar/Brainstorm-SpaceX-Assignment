import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";





const reducers = combineReducers({
});



export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
