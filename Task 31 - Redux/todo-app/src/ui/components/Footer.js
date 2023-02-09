import {useSelector} from "react-redux";
import {todosSelectors} from "../../engine/todos/selectors";

const Footer = () => {
    const value = useSelector(todosSelectors.value);
    return (
        <span id={'value'}>You have {value} todos</span>
    )
}

export default Footer;