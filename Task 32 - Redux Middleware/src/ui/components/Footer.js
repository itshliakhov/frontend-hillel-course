import {useSelector} from "react-redux";
import {todosSelectors} from "../../engine/todos/selectors";
import {DeleteButton} from "./DeleteButton";

 export const Footer = () => {
    const value = useSelector(todosSelectors.items).length;

    return (
        <div>
        <p>У вас ({value}) записей.</p>
        <DeleteButton />
        </div>
    )
}