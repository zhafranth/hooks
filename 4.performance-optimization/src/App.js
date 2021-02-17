import React, { useState, useCallback, useMemo } from "react";
import Layout from "./components/Layout";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // React memo pada array dan object yaitu dengan membuatkan state
  const [user, setUser] = useState({ name: "jhon" });
  const handleCount = () => setCount(count + 1);
  console.log("==> This Parent Component");
  // jika di child yang memiliki proses yang berat
  const memoizedHandleCount = useCallback(handleCount, []);

  // Jika di Parent yang memiliki proses yang berat
  const heavyProcess = (u) => {
    sleep(2000);
    return u;
  };

  const userProp = useMemo(() => heavyProcess(user), [user]);
  return (
    <Layout title="React Hooks #4 - Performance Optimization">
      <h3>-- Parent Component</h3>
      <p>
        <button onClick={handleCount}>Count</button>
        <span>{count}</span>
      </p>
      <MemorizedChildComponent
        title="Hello"
        click={memoizedHandleCount}
        user={userProp}
      />
    </Layout>
  );
}

export default App;

function ChildComponent({ title, click, user }) {
  // sleep(2000);
  console.log("==> This Child Component");
  return (
    <>
      <p>
        <br />
        <i>-- Child Component --</i>
      </p>
      <h1>
        {title}, {user.name}
      </h1>
      <button onClick={click}>Like</button>
    </>
  );
}

const MemorizedChildComponent = React.memo(ChildComponent);

function sleep(miliseccond) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < miliseccond);
}
