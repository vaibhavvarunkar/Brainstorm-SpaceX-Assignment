import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI } from "../genericApis";
import { GET_ROCKETS } from "../url.links";

export const _getShipsInfo = createAsyncThunk(
  GET_ROCKETS,
  async (
    //optional limit parameter
    params: { ship_type?: string, year_built?:number | string, home_port?:string },
    { rejectWithValue }
  ): Promise<any> => {
    console.log(params);
    
    try {
      const response = await getAPI(
        params,
        GET_ROCKETS
      );
      if (response) {        
        return response.data;
      } else throw rejectWithValue("error");
    } catch (err) {
      let error: any | undefined = err; // cast the error for access
      if (!error.response) {
        throw rejectWithValue(err);
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      throw rejectWithValue(error.response.data);
    }
  }
);