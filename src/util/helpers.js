const authenticate = (key = "jobly-token") => {
  return window.localStorage.getItem(key);
}

export { authenticate };