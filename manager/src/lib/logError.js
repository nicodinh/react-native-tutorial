export const logError = error => {
  if (error && error.code && error.message) {
    console.log('%cError', 'color: red;', `${error.code}: `, error.message);
  } else {
    console.log('%cError', 'color: red;', error);
  }
};