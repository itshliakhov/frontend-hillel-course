// Core
import {useDispatch, useSelector} from "react-redux";
// Engine
import {todosSelectors} from "../../engine/todos/selectors";
import {setItems} from "../../engine/todos/slice";

export const AddTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelectors.items);

    const addItem = (event) => {
        event.preventDefault();
        dispatch(setItems([...todos, {
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            text: event.target[0].value
        }]))
        event.target[0].value = ''
    }

    return (
        <form action="src/ui/containers/App#" onSubmit={addItem}>
            <input type="text"/>
            <button type={"submit"}>Add To-Do</button>
        </form>
    )
};