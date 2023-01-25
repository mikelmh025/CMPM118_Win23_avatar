import { configureStore } from '@reduxjs/toolkit'
import CategoryReducer from "../slices/categorySlice"
import DataFetchReducer from '../slices/dataFetchSlice'
import resultReducer from '../slices/resultSlice';

export default configureStore({
  reducer: {
    category: CategoryReducer,
    data: DataFetchReducer,
    results: resultReducer,
  },
});

