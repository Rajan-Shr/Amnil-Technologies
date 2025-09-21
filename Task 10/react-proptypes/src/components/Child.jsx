import { useState } from "react";

function Child({ onSendData }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    onSendData(inputValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
}

export default Child;
