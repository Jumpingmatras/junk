import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../app/reducers/ItemCounter";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{count}</div>
            <div onClick={() => dispatch(increment())}>DIV</div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(decrement())}>1</button>
            <button onClick={() => dispatch(decrement())}>2</button>
            <button onClick={() => dispatch(decrement())}>3</button>
            <button onClick={() => dispatch(decrement())}>4</button>
            <button onClick={() => dispatch(decrement())}>5</button>
        </div>
    )
}

export default Counter;