import { createSlice } from "@reduxjs/toolkit";
const fetchingStatusSlice=createSlice({
  name:'fetchStatus',
  initialState:{
    fetchDone:false,
    currentlyFetching:false,
  },
  reducers:{
    markFetchDone:(state)=>{
      state.fetchDone=true;
    },
    markFetchingStarted:(state)=>{
      state.currentlyFetching=true;
    },
    markFetchingFinished:(state)=>{
      state.currentlyFetching=false;
    }
  }
});
export const fetchActions=fetchingStatusSlice.actions;
export default fetchingStatusSlice;