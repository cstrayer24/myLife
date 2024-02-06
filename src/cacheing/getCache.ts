function getCache() {
  if (typeof window == "undefined") {
    return 0;
  }

  return JSON.stringify(window.localStorage.getItem("user-cache"));
}
