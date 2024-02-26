import { cakeAction } from "./cakeSlice";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfIceCreams: 10
};

const iceCreamSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    }
  },
  // extraReducers: {
  //   ['cake/ordered']: (state, action) => {
  //     state.numOfIceCreams--
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeAction.ordered, (state) => {
      state.numOfIceCreams--
    })
  }
});


export default iceCreamSlice.reducer;
export const iceCreamAction = iceCreamSlice.actions;
