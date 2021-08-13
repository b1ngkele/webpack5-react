import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, reduceCount } from '../../store/actions';

const Home = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      Home
      {count}
      <div style={{ marginTop: 10 }}>
        <Button type="primary" onClick={() => dispatch(increaseCount(count))} style={{ marginRight: 10 }}>increase</Button>
        <Button type="danger" onClick={() => dispatch(reduceCount(count))}>reduce</Button>
      </div>
    </div>
  );
};

export default Home;
