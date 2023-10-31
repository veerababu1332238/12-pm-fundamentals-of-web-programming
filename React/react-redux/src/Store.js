import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter.slice';
import usersReducer from './slices/users.slice';
import tutorialsReducer from './slices/tutorials.slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer, // {value: 0},
        users: usersReducer,
        tutorialsInfo: tutorialsReducer
    }
});