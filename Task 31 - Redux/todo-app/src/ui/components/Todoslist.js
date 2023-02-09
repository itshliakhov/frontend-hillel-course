import {useSelector} from "react-redux";
import {todosSelectors} from "../../engine/todos/selectors";

const Todoslist = () => {
    const todos = useSelector(todosSelectors.items);
    return (
        <ul>
            {todos.map(item => {
                return (
                    <li key={item.id}>{item.text}</li>
                )
            })}
        </ul>
    )
}

export default Todoslist;