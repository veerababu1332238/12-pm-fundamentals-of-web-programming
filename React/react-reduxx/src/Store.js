import {configureStore} from '@reduxjs/toolkit';
import sliceCounter from './Slices/slice.counter';
export const store = configureStore(
    {
        reducer: {
            counter : sliceCounter
        }
    }
)
