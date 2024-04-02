import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'



export const store =  configureStore({
  reducer: {
    counterReducer
  }
})

export interface CounterState {
  value: number; 
}
export type RootState = {
  counterReducer: CounterState;
}

export type AppDispatch = typeof store.dispatch