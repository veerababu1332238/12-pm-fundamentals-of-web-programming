import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialValue = {
    isLoading: false,
    data: [],
    error: null,
};

export const fetchAllUsers = createAsyncThunk('users/all', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        return error;
    })
});

const usersSlice = createSlice({
    name: 'Users',
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default usersSlice.reducer;