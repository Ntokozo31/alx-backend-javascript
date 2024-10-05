function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('success');
    } else {
      reject(new Error('404!'));
    }
  });
}

getResponseFromAPI()
  .then((response) => {
    /* eslint-disable no-console */
    console.log(response);
  })
  .catch((error) => {
    /* eslint-disable no-console */
    console.error(error);
  });
