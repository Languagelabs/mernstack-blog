 import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    value: 0,
    message: null,
    previous: null,
    incrementValue: 0,
    decrementValue: 0,
    isIncreaseLoading: false,
    isDecreaseLoading: false,
 }

 const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.previous = state.value;
            state.value += 1;
            state.message = 'Previous count = '+state.previous;
        },
        decrease: (state) => {
            state.previous = state.value;
            state.value -= 1;
            state.message = 'Previous count = '+state.previous;
        },
        setIncrement: (state, action) => {
            state.incrementValue = action.payload
        },
        setDecrement: (state, action) => {
            state.decrementValue = action.payload
        },
        increaseBy: (state) => {
            state.previous = state.value;
            state.value += state.incrementValue;
            state.message = 'Previous count = '+state.previous; 
        },
        decreaseBy: (state) => {
            state.previous = state.value;
            state.value -= state.decrementValue;
            state.message = 'Previous count = '+state.previous;
        },
        reset: (state) => {
            state.value = 0;
            state.message = null;
            state.incrementValue = 0;
            state.decrementValue = 0;
            state.previous = null;
        },
        loadingIncrement: (state, action) => {
            state.isIncreaseLoading = action.payload; 
        },
        loadingDecrement: (state, action) => {
            state.isDecreaseLoading = action.payload;
        },

        
    },
 });

 export const { 
    increase, 
    decrease, 
    increaseBy, 
    decreaseBy, 
    setIncrement, 
    setDecrement, 
    reset, 
    loadingIncrement,
    loadingDecrement,

    } = counterSlice.actions;

 export default counterSlice.reducer;