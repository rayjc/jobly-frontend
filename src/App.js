import React, { useEffect } from 'react';
import Nav from './Nav';
import Routes from './Routes';
import { useLocalStorage } from './util/hooks';

const LOCAL_STORAGE_KEY = 'jobly-token';

function App() {
  const [token, setToken] = useLocalStorage(LOCAL_STORAGE_KEY, null);

  return (
    <div className="App">
      <Nav setToken={setToken} token={token} />
      <Routes setToken={setToken} />
    </div>
  );
}

export default App;
