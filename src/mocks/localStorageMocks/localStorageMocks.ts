export const setLocalStorage = (token: string) => {
  window.localStorage.setItem("token", token);
};
