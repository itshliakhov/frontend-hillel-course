import {useSelector} from "react-redux";
import {counterSelector} from "../../engine/core/counter/selector";

export const Counter = () => {
    const value = useSelector(counterSelector.value);
    return (
        <span id={'value'}>Counts:{value}</span>
    )
}