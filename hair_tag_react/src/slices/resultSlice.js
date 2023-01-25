import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const resultSlice = createSlice({
  name: 'results',
  initialState: {
    results: [],
  },
  reducers: {
    addResult: (state,action) => {
        const resultObj = action.payload
        const found = state.results.find((e) => e.group === resultObj.group && e.category === resultObj.category)
        if(found){
            found.selection = resultObj.selection;
            found.time = resultObj.time;
        }else{
            state.results.push(resultObj);
        }
        console.log(state.results);
        // state.results.push(resultObj);
    }
  },
});

export const {addResult} = resultSlice.actions

export default resultSlice.reducer;