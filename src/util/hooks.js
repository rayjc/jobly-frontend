import { useState, useEffect } from 'react';


const useSessionStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const stored = window.sessionStorage.getItem(key);
    return stored ? stored : initialValue;
  });

  useEffect(() => {
    if (typeof state == "object") {
      window.sessionStorage.setItem(key, JSON.stringify(state));
    } else {
      window.sessionStorage.setItem(key, state);
    }
  }, [state, key]);

  return [state, setState];
}


const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const stored = window.localStorage.getItem(key);
    return stored ? stored : initialValue;
  });

  useEffect(() => {
    if (state && typeof state == "object") {
      window.localStorage.setItem(key, JSON.stringify(state));
    } else if (state) {
      window.localStorage.setItem(key, state);
    } else {
      window.localStorage.removeItem(key);
    }
  }, [state, key]);

  return [state, setState];
}


export { useSessionStorage, useLocalStorage };