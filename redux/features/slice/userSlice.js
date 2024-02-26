const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  users: [],
  error: ''
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  //return axios.get()
  //.then(response=>response.data)
  return {
    data: {
      id: 1
    }
  }
})
//createSlice will au
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.payload
    })
  }
});


export default userSlice.reducer;
