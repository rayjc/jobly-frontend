
const login = (token, key = "jobly") => {
  window.localStorage.setItem(key, JSON.stringify({ token }));
}

const logout = (key = "jobly") => {
  window.localStorage.removeItem(key);
}

const authenticate = (key = "jobly-token") => {
  return window.localStorage.getItem(key);
}

export { authenticate, login, logout };