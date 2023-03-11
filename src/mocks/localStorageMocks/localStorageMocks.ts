export let store = {} as Storage;

export const mockLocalStorage = {
  getItem: (key: string): string => {
    return store[key];
  },
  setItem: (key: string, value: string) => {
    store[key] = `${value}`;
  },
  removeItem: (key: string) => {
    delete store[key];
  },
  clear: () => {
    store = {} as Storage;
  },
};

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

export const setLocalStorage = (key: string, token: string) => {
  window.localStorage.setItem(key, token);
};
