import { useState } from "react";
import Counter from "./Counter";
import User from "./User";

function App(){
  const [fruit,setFruit]=useState("Apple");
  const handleFruit=()=>{
    setFruit("Banana")
    setFruit("orange")
    setFruit("Grapes")
  }
  return(
    <>
    <div>
      <h1>States in react</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>chage fruit name</button>
    </div>
    <hr />
    <Counter reverse={true}/>
    <hr />
    <User/>
    </>
  )
}
export default App;