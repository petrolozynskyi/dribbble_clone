import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { increment, decrement, reset } from "../state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counterReducer.value);
    const dispatch = useDispatch()


    return <div>
        <h2>{count}</h2>

        <button onClick={() => dispatch(increment())}>
            Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
            decrement
        </button>
        <div className="animated-element perspective transform group hover:translate-y-40 hover:translate-z-20">
            hei
        </div>
    </div>
};

export default Counter;