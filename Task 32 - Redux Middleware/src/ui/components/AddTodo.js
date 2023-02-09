// Core
import { useDispatch, useSelector } from 'react-redux';
// Engine
import { todosSelectors } from "../../engine/todos/selectors";
import { addItem } from "../../engine/todos/thunk/addItem";


export function AddTodo() {
    const dispatch = useDispatch();
    const loading = useSelector(todosSelectors.loading);


    const onSubmit = (event) => {
        dispatch(addItem(event))
    }

    return (
        <form action="#" className="form js--form" onSubmit={onSubmit}>
            <input type="text" className="form__input js--form__input"/>
            <button className="form__button" type="submit" disabled={loading}>Добавить</button>
        </form>
    )
}
