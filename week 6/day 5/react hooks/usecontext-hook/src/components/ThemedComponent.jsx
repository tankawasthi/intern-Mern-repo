import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider"; // Import the context from the provider file

export default function ThemedComponent() {
  // Use the useContext hook to access the context's value
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}