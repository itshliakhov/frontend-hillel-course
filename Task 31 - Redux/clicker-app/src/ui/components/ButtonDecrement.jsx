import {useDispatch} from "react-redux";
// Engine
import {decrement} from "../../engine/core/counter/slice";


export const ButtonDecrement = () => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(decrement());

    return (
        <button
            id={'decrement'}
            onClick={handleClick}
        >
            -
        </button>
    )
}