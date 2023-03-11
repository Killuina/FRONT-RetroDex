export const setLocalStorage = (key: string, token: string) => {
  window.localStorage.setItem(key, token);
};
