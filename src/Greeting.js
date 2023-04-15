import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/slice/greetingSlice';
import './index.css';

export const Greeting = () => {
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  const dispatch = useDispatch();

  const handleFetchGreeting = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div>
      <h1 className="heading">{greeting}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <button className="btn" type="submit" onClick={handleFetchGreeting}>Get Random Greeting</button>
    </div>
  );
};

export default Greeting;
