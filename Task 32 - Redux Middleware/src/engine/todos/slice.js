import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: {
            prepare: (payload, meta) => ({ payload, meta }),
            reducer: (state, action) => {
                const { payload } = action;
                state.items = payload;
            }
        },
        setLoading: (state, action) => {
            const { payload } = action;
            state.loading = payload;
        }
    }
})

export const { setItems, setLoading } = todos.actions;
export const todosReducer = todos.reducer;
