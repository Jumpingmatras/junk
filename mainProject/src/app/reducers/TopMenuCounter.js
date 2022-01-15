import {createSlice} from '@reduxjs/toolkit';

export const menuPos = createSlice({
   name: 'indicatorPosition',
    initialState: {
       value: 1
    },
    reducers: {
        position1: (state) => {
           state.value = 1;
        },
        position2: (state) => {
           state.value = 2;
        },
        position3: (state) => {
           state.value = 3;
        },
        position4: (state) => {
           state.value = 4;
        },
        position5: (state) => {
           state.value = 5;
        },

    }
});

export const { increment, decrement } = menuPos.actions;

export default menuPos.reducer;