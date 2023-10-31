import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialValue,
    reducers: {
        increment: (state, action) => {
            return {value: state.value + 1};
        },
        decrement: (state, action) => {
            return {value: state.value - 1};
        },
        reset: (state, action) => {
            return {value: 0};
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

// action: {
//     type: '',
//     payload: value
// }