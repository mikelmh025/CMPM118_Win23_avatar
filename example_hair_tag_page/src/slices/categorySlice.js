import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        'Top and front side': [
                {name: 'Length', check: false},
                {name: 'Direction', check: false},
                {name: 'Curl Level', check: false},
            ],
        'Side': [
                {name: 'Length', check: false},
                {name: 'Curl Level', check: false},
            ],
        'Braid': [
            {name: 'Yes/No Braid', check: false}, 
            {name: 'Count', check: false},
            {name: 'Position', check: false},
            {name: 'Braid Style', check: false}, 
        ],
    }
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    isChecked: (state, action) => {
      const dataArray = state.data[action.payload.groupName];
      dataArray.forEach(element => {
        if(element.name === action.payload.selection){
          element.check = true;
        }
      });
    },
  },
})

// Action creators are generated for each case reducer function
export const { isChecked } = categorySlice.actions;

export default categorySlice.reducer;