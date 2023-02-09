import { deleteItems } from "../../engine/todos/thunk/deleteItems";
import {useDispatch, useSelector} from "react-redux";
import {todosSelectors} from "../../engine/todos/selectors";

export const DeleteButton = () => {
    const todos = useSelector(todosSelectors.items);
    const dispatch = useDispatch();

    const deleteTodos = () => {
        dispatch(deleteItems())
    }

    return (
        <button onClick={deleteTodos} type={"submit"}>Delete all To-Do`s</button>
    )
}