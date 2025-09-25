import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function GetName() {
  const [name, setName] = useLocalStorage('username', '');
  const [inputName, setInputName] = useState('');

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = () => {
    if (inputName.trim()) {
      setName(inputName);
    }
  };

  return (
    <div>
      <h1>Hello, {name || 'Guest'}</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={inputName}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Set Name</button>
        </div>
      
    </div>
  );
}

export default GetName;
