const saveLS = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    window.localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set LS state error: ', error.message);
  }
};

const loadLS = key => {
  try {
    const serializedState = window.localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get LS state error: ', error.message);
  }
};

const removeLS = key => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove LS state error: ', error.message);
  }
};

export { saveLS, loadLS, removeLS };
