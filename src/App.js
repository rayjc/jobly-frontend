import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Routes from './Routes';
import { useLocalStorage } from './util/hooks';
import { decode } from "jsonwebtoken";
import UserApi from './api/UserApi';
import AuthContext from './AuthContext';

const LOCAL_STORAGE_KEY = 'jobly-token';

function App() {
  const [token, setToken] = useLocalStorage(LOCAL_STORAGE_KEY, null);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { username } = decode(token);
        const { user } = await UserApi.getUser(username);
        setCurrUser(user);
      } catch (error) {
        // console.error(error);
        setCurrUser(null);
      }
    }

    fetchUser();
  }, [token])

  return (
    <div className="App">
      <AuthContext.Provider value={{ token, setToken, currUser, setCurrUser }}>
        <Nav />
        <Routes />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
