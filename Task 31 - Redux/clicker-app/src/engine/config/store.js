import {configureStore} from '@reduxjs/toolkit';
// Slice
import {counter} from '../core/counter/slice';

export const store = configureStore({
    reducer: {
        counter: counter
    }
})