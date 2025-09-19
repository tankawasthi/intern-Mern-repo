// src/components/WelcomePage.jsx
import React, { useContext } from "react";
import { UserContext } from "../store/Context";

const WelcomePage = ({ onBack }) => {
  const { user } = useContext(UserContext);

  return (
    <div style={styles.container}>
      <h1>Welcome {user?.name || "Guest"}!</h1>
      <p>ID: {user?.id || "N/A"}</p>
      <button style={styles.button} onClick={onBack}>
        Go Back
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#07061aff",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default WelcomePage;
