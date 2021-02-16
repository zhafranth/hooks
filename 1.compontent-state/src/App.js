import React, { useState } from "react";
import "./App.css";
import Layout from "./component/layout";
import useCounter from "./useCounter";

function App() {
  const [state, setState] = useState({
    subscribe: true,
    like: 0,
    dislike: 0,
  });

  const [like, handleLike, handleTriple] = useCounter(0);
  const [dislike, handleDislike] = useCounter(0);

  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe: !state.subscribe,
    });
  };

  // const handleLike = () => {
  //   setState((currentState) => ({
  //     ...state,
  //     like: currentState.like + 1,
  //   }));
  // };

  // const handleTripleLike = () => {
  //   handleLike();
  //   handleLike();
  //   handleLike();
  // };

  return (
    <div className="App">
      <Layout title="React Hooks #1 - Component State">
        <p>
          <button onClick={handleSubscribe}>Subscribe</button>
          <span>{state.subscribe ? "subsscibe" : "unsubscribe"}</span>
        </p>
        <p>
          <button onClick={handleLike}>Like</button>
          <span>{like}</span>
        </p>
        <p>
          <button onClick={handleDislike}>Dislike</button>
          <span>{dislike}</span>
        </p>
        <p>
          <button onClick={handleTriple}>Triple Like</button>
          <span>{like}</span>
        </p>
      </Layout>
    </div>
  );
}

export default App;
