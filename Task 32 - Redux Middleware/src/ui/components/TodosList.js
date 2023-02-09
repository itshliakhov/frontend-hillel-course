import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelectors } from "../../engine/todos/selectors";
import { getItems } from "../../engine/todos/thunk/getItems";
export function TodosList() {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelectors.items);
    const loading = useSelector(todosSelectors.loading);

    useEffect(() => {
        dispatch(getItems('Love Front-End Pro course with all my heart'));
    }, []);

    return (
        <div className="todos-wrapper js--todos-wrapper">
            {loading
                ? <span>Loading...</span>
                : todos.map(item => {
                    return (
                        <label className="todo-item" key={item.id}>
                            <div className="todo-item__desc">{item.text}</div>
                        </label>
                    )
                })
            }
        </div>
    )
};
