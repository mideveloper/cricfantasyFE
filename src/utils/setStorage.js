export const setLocalStorage = (key, data) => {
  if (data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if(data){
    return JSON.parse(data);
  }

  return null;
};

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const isUserLoggedIn = (key) => {
  const data = localStorage.getItem(key);
  if(data){
    return true;
  }

  return false;
};