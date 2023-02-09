import { setItems } from "../slice";

export const addItem = (event) => (dispatch, state) => {
    event.preventDefault();
    const { todos } = state();
    dispatch(setItems(
        [...todos.items, {
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            text: event.target[0].value,
            checked: false
        }],
        {
            delayMS: 100,
        }
    ));
    event.target[0].value = '';
}
