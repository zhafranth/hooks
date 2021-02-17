import React, { useState, useEffect } from "react";

const MyFunc = () => {
  console.log("==> function init");
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("==> my first Effect");
  });

  // componentDidMount
  useEffect(() => {
    console.log("==> componentDidMount equivalent");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (count > 0) {
      console.log("==> componentDidUpdate equivalent");
    }
  }, [count]);

  // componentWillUnMount
  useEffect(() => {
    // Cleanup-function
    return () => {
      console.log("==> componentWillUnMount equivanlent");
    };
  }, []);

  console.log("==> start render");
  return (
    <div>
      <h1>Function Component</h1>
      <p>
        <button onClick={handleCount}>Count</button>
        {count}
      </p>
    </div>
  );
};

export default MyFunc;
