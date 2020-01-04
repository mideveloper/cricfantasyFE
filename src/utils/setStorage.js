export const setLocalStorage = data => {
  if (data) {
    for (let property in data) {
      localStorage.setItem(property, data[property]);
    }
  }
};
