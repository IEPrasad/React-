// App.js

import React, { useState } from 'react';

function App() {
  // State for input and button click count
  const [inputValue, setInputValue] = useState('');
  const [clickCount, setClickCount] = useState(0);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle button click
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    alert(`Button clicked! Input Value: ${inputValue}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My First React App</h1>

      <input
        type="text"
        placeholder="Enter text here"
        value={inputValue}
        onChange={handleInputChange}
        style={styles.input}
      />

      <button onClick={handleButtonClick} style={styles.button}>
        Click Me
      </button>

      <p style={styles.text}>Button clicked {clickCount} times</p>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  text: {
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default App;
