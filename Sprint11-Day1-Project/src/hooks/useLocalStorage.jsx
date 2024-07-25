import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem(key));
    return localValue !== null ? localValue : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
