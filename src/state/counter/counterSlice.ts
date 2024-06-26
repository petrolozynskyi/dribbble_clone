import { createSlice } from "@reduxjs/toolkit";

interface axaxvrotState {
    value: number;
}

export const initialState: axaxvrotState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "heroImg",
    initialState,
    reducers: {
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -=1
        },
        reset: (state) => {
            state.value = 0;
        }
    },
});

export const { increment, decrement, reset } = counterSlice.actions; 

export default counterSlice.reducer;