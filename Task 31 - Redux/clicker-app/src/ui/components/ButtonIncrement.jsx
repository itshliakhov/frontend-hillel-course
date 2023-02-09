import {useDispatch} from "react-redux";
// Engine
import {increment} from "../../engine/core/counter/slice";

export const ButtonIncrement = () => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(increment());

    return (
        <button
            id={'increment'}
            onClick={handleClick}
        >
            +
        </button>
    )
}