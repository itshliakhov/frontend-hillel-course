import {createSlice} from "@reduxjs/toolkit";

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        value: 0
    },
    reducers: {
        setItems: (state, action) => {
            const {payload} = action;
            state.items = payload;
            state.value = action.payload.length;
        }
    }
})

export const {setItems} = todos.actions;
export const todosReducer = todos.reducer;