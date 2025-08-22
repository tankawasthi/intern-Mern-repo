import React from "react";
import Home from "./Home";
import Info from "./Info";

 const App = () => {
  return (
    <>
    <div>
      <h1>Hellow world</h1>
      <p>This is my first react app </p>
      <Home />
    </div>
    <div>
      <h1>User Info</h1>
      <Info
        name="Hari"
        age={22}
        email="hari@example.com"
        phone="9812345678"
        address="Kathmandu, Nepal"
      />
    </div>
    </>
  )
};

export default App;

// BUT IN TRADITIONAL JS WE CAN ATTATCH THE HTML FILE IN JS AS



// Non-JSX (core React) component
export const AppCore = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello from core hard coding for react")
  )
};
