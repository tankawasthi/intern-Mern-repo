import React from "react";
import ThemedComponent from "./components/ThemedComponent";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </>
  );
}

export default App;