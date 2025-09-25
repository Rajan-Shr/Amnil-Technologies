import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);

  const [storedData, setStoredData] = useState(() => {
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setName = (value) => {
    setStoredData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedData, setName];
}

export default useLocalStorage;
