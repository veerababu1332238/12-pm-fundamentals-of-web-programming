import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialValue = {
    isLoading: false,
    tutorials: [],
    error: null,
};

export const fetchAllTutorials = createAsyncThunk('getAllTutorials', (data) => {
    console.log(data);
    return axios.get('http://localhost:3001/v1/tutorials').then(response => {
        return response.data;
    });
});

export const addTutorial = createAsyncThunk('getAllTutorials', (payload) => {
    return axios.post('http://localhost:3001/v1/tutorials', payload).then(response => {
        return response.data;
    });
});

const tutorialsSlice = createSlice({
    name: 'tutorialsSlice',
    initialState: initialValue,
    extraReducers: (builder) => {
        builder 
            .addCase(fetchAllTutorials.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllTutorials.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.tutorials = action.payload.data;
            })
            .addCase(fetchAllTutorials.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }   
});

export default tutorialsSlice.reducer;