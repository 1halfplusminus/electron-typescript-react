import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

export const Root = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [count]);
  return <div> Hello from react {count}</div>;
};

export default hot(Root);
