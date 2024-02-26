const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfCakes: 20
};

//createSlice will au
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    }
  }
});


export default cakeSlice.reducer;
export const cakeAction = cakeSlice.actions;
