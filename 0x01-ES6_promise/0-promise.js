function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve('success');
        } else {
            reject('404!');
        }
    });
}

getResponseFromAPI()
    .then((response) => {
         console.log(response);
    })
    .catch((error) => {
         console.error(error);
    });    