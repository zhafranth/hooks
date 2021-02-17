import React, { useState } from "react";
import "./App.css";
import Layout from "./components/layout";
import MyFunc from "./components/myFunc";
import NewsFeed from "./components/NewsFeed";

function App() {
  const [togle, setTogle] = useState(true);
  const handleTogle = () => {
    setTogle((currentState) => !currentState);
  };
  return (
    <Layout title="React Hooks #2 - Side Effect">
      <button onClick={handleTogle}>Togle</button>
      {togle ? <MyFunc /> : null}
      <NewsFeed />
    </Layout>
  );
}

export default App;
