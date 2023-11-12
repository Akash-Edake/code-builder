import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './action/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})