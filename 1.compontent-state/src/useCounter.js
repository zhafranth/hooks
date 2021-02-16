import React, { useState } from "react";

function useCounter() {
  const [state, setState] = useState(0);

  const handleCounter = () => {
    setState((currentState) => currentState + 1);
  };

  const handleTriple = () => {
    handleCounter();
    handleCounter();
    handleCounter();
  };
  return [state, handleCounter, handleTriple];
}

export default useCounter;
