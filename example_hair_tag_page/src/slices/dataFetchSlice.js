import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getData = createAsyncThunk('data/getData', async () => {
  return fetch('https://minghaouserstudy.s3.amazonaws.com/HITL_navi/icon/description.json')
    .then((res) => res.json()
    );
})

const dataFetchSlice = createSlice({
  name: 'data',
  initialState: {
    data: {},
    loading: false
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default dataFetchSlice.reducer;