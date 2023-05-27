import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { _getShipsInfo } from "../../Actions/shipsActions";
import {  loadTypeFilterOptions, validateData,  } from "./utils";

const shipsSlice = createSlice({
  name: "ships",
  initialState,
  reducers: {
    setPopupdata(state, action) {
      state.popupData = action.payload
    },
    setTypeParam(state, action){
      state.typeParam = action.payload
    },
    setYearParam(state, action){
      state.yearParam = action.payload.value.toString()
    },
    setPortParam(state, action){
      state.portParam = action.payload.value.toString()
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
      if(state.typeParam.length === 0 && state.yearParam === ""){
        state.TypeFilter = loadTypeFilterOptions(payload, "ship_type")
        state.yearFilter = loadTypeFilterOptions(payload, "year_built")
        state.portFilter = loadTypeFilterOptions(payload, "home_port")
      }
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
  setPopupdata: dispatchSetPopupData,
  setTypeParam:dispatchSetTypeParam,
  setYearParam:dispatchSetYearParam,
  setPortParam:dispatchSetPortParam
} = shipsSlice.actions

export default shipsSlice