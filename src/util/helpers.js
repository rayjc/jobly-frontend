
const login = (token, key = "jobly") => {
  window.localStorage.setItem(key, JSON.stringify({ token }));
}

const logout = (key = "jobly") => {
  window.localStorage.removeItem(key);
}

const authenticate = (key = "jobly") => {
  try {
    const stored = window.localStorage.getItem(key);
    if (stored) {
      const { token } = JSON.parse(window.localStorage.getItem(key));
      return token;
    }
  } catch (error) {
    console.error(`Fail to parse ${key} in localStorage.`)
  }
  return null;
}

export { authenticate, login, logout };