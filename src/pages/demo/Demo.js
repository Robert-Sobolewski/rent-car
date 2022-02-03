import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { add, minus, selectCounter } from '../../components/counter/counterSlice';

const Demo = () => {
    const tmp = useSelector(selectCounter)
    const dispatch = useDispatch()
  return <div>
      <h1>demo website {tmp}</h1>
      <button onClick={()=>dispatch(add())}>+</button>
      <button onClick={()=>dispatch(minus())}>-</button>
  </div>;
};

export default Demo;
