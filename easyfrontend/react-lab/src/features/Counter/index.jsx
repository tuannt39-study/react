import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import { decrement, increment } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increment();
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Counter1 />
      <Counter2 />
      {/* <Typography component="h2" variant="h2">
        {count}
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        style={{ marginRight: '.5rem' }}
        onClick={handleDecreaseClick}
      >
        Decrease
      </Button>

      <Button variant="contained" color="primary" onClick={handleIncreaseClick}>
        Increase
      </Button> */}
    </div>
  );
}

export default CounterFeature;
