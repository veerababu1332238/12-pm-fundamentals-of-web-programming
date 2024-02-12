import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement,reset } from './Slices/slice.counter';
export default function CounterComponent () {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    console.log(counter); 
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm'>
                    <h1>counter : {counter.value}</h1>
                    <button className='btn btn-primary me-2' onClick={() => dispatch(increment())} >increment</button>
                    <button className='btn btn-warning me-2' onClick={() => dispatch(decrement())}>decrement</button>
                    <button className='btn btn-danger me-2' onClick={() => dispatch(reset())}>reset</button>
                </div>
            </div>
        </div>
    )
}