import React, { useState, useContext } from "react";
import { UserContext } from "../store/Context";

const UserForm = ({ onSubmit }) => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [showId, setShowId] = useState(true); // toggle state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !id) {
      alert("Please fill out all fields");
      return;
    }
    setUser({ name, id });
    onSubmit();
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Enter User Info</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {showId && (
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      )}

      <button type="button" onClick={() => setShowId(!showId)}>
        {showId ? "Hide ID Field" : "Show ID Field"}
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4f46e5',
    color: 'white',
    cursor: 'pointer',
    transition: '0.3s',
  },
};


export default UserForm;
