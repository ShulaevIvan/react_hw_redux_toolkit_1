import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    value: 0,
    numberValid: false,
};

const nubmerSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        changeNumber(state, action) {
            state.value = Number(action.payload) > 0 && Number(action.payload) <= 5 ? Number(action.payload) : state.value;
            state.numberValid = Number(action.payload) > 0 && Number(action.payload) <= 5 ? true : false
        },
    }
});

export const {changeNumber} = nubmerSlice.actions;
export default nubmerSlice.reducer;
