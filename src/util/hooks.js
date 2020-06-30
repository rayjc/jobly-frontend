import { useState, useEffect } from 'react';


const useSessionStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const value = JSON.parse(window.sessionStorage.getItem(key) || JSON.stringify(initialValue));
      return value;
    } catch (error) {
      console.error(`Fail to parse ${key} in sessionStorage.`)
      return initialValue;
    }
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
    try {
      const value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(initialValue));
      return value;
    } catch (error) {
      console.error(`Fail to parse ${key} in localStorage.`)
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof state == "object") {
      window.localStorage.setItem(key, JSON.stringify(state));
    } else {
      window.localStorage.setItem(key, state);
    }
  }, [state, key]);

  return [state, setState];
}


export { useSessionStorage, useLocalStorage };