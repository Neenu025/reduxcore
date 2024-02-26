import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, decrementby5, increment, incrementby5 } from '../redux/counter/counterAction'


const Counter = () => {
    const count = useSelector((state)=>state.count)
    const count2 = useSelector((state)=>state.count2)
    const dispatch = useDispatch()
  return (
    <div>
        Count : {count}
        <br/>
        <button onClick={() =>dispatch(increment())}>Increment</button>
        <br/>
        <br/>

        <button onClick={() =>dispatch(decrement())}>decrement</button>
        <br/>
        Count 2 : {count2}
        <br/>

        <button onClick={() =>dispatch(incrementby5())}>Incrementby 5</button>
        <br/>
        <br/>

        <button onClick={() =>dispatch(decrementby5())}>Decrementby 5</button>
        <br/>

    </div>
  );
};

export default Counter