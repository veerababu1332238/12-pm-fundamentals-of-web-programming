import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './slices/counter.slice';

export default function CounterComponent() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2>Counter: {counter.value}</h2>
                    <button className='btn btn-primary me-2' onClick={() => dispatch(increment())}>Increment</button>
                    <button className='btn btn-warning me-2' onClick={() => dispatch(decrement())}>Decrement</button>
                    <button className='btn btn-danger' onClick={() => dispatch(reset())}>Reset</button>
                </div>
            </div>
        </div>
    )
}