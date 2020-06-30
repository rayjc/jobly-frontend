
const login = (token, key = "jobly") => {
  window.localStorage.setItem(key, JSON.stringify({ token }));
}

const authenticate = (key = "jobly") => {
  try {
    const { token } = JSON.parse(window.localStorage.getItem(key));
    return token;
  } catch (error) {
    console.error(`Fail to parse ${key} in localStorage.`)
    return null;
  }
}

export { authenticate, login };