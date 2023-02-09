import { setItems, setLoading } from "../slice";

export const getItems = (text) => {
    console.log('text', text);
    return (dispatch) => {
        setTimeout(() => {
            dispatch(setItems([{ id: 1, text: text }]));
            dispatch(setLoading(false));
        }, 3000);
    }
}
