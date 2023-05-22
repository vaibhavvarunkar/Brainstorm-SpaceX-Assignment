import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { _getShipsInfo } from "../../Actions/shipsActions";
import { validateData } from "./utils";

const shipsSlice = createSlice({
  name: "ships",
  initialState,
  reducers: {
    setPopupdata(state, action) {
      state.popupData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(_getShipsInfo.pending, (state) => {
      state.loaders.rocketsResponse = {
        pending: true,
        fullfilled: false,
        rejected: false,
      };
    });
    builder.addCase(_getShipsInfo.fulfilled, (state, { payload }) => {
      state.loaders.rocketsResponse = {
        pending: false,
        fullfilled: true,
        rejected: false,
      };
      state.data = validateData(payload)
    });
    builder.addCase(_getShipsInfo.rejected, (state, payload: any) => {
      state.loaders.rocketsResponse = {
        pending: false,
        fullfilled: false,
        rejected: true,
      };
      state.error = payload
    });
  },
});

export const {
  setPopupdata: dispatchSetPopupData
} = shipsSlice.actions

export default shipsSlice