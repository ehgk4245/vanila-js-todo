const storage = window.localStorage;

export const setItem = (key, value) => {
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  } catch (e) {
    console.error("getItem error:", e);
    return defaultValue;
  }
};
