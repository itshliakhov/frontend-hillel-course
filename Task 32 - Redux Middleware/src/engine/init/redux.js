import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { todosReducer } from "../todos/slice";
import { delay } from "../middleware/delay";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        delay,
        thunk,
    ],
})
