function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('Done');
    } else {
      reject(console.error('failed'));
    }
  });
}

getResponseFromAPI()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
