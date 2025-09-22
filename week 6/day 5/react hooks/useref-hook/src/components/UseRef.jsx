import React, { useRef, useState } from 'react';

export const UseRef = () => {
  // 1. Create refs to access the input fields directly
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // 2. Use state to store the list of submitted entries
  const [submittedData, setSubmittedData] = useState([]);

  // 3. Handle the form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading

    // Get the current values and IDs from the refs
    const username = usernameRef.current.value;
    const usernameId = usernameRef.current.id;
    const password = passwordRef.current.value;
    const passwordId = passwordRef.current.id;

    // Create a new object to hold the data
    const newEntry = {
      username: username,
      usernameId: usernameId,
      password: password,
      passwordId: passwordId,
    };

    // Update the state with the new data, which triggers a re-render
    setSubmittedData(prevData => [...prevData, newEntry]);

    // Imperatively clear the input fields after submission
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id='username' ref={usernameRef} />
        <br />
        <input type="text" id='password' ref={passwordRef} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      <ul>
        {submittedData.map((item, index) => (
          // Add a key for performance and to avoid a React warning
          <li key={index}>
            <p>Username ({item.usernameId}): {item.username}</p>
            <p>Password ({item.passwordId}): {item.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
