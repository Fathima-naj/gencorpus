import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  function displayText() {
    setDisplayValue(inputValue);
  }

  return (
    <div>
      <h2>Enter Something:</h2>

      {/* Input box */}
      <input
        type="text"
        placeholder="Type here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Button */}
      <button onClick={displayText}>Submit</button>

      {/* Output */}
      <h3>{displayValue}</h3>
    </div>
  );
}

export default App;