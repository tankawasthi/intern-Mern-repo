import React, { useState } from "react"
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);

  const increastCount = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);


  const result = React.useMemo(() => {
    let i = 0;
    console.time("result");
    while (i < 1000000) {
      i++;
    }
    console.timeEnd("result");
    return 90;
  },[]);


  return (
    <>
      <div>
        <h1>Performance Optimization In ReactJs  {count} <br /> and the result is {result}</h1>
        <Child increastCount={increastCount} />

      </div>
    </>
  )
}

export default App
