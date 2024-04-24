function handleResponseFromAPI(promise) {
  return promise
    .then((success) => {
      return { status: 200, body: "Success" };
    })
    .catch((error) => {
      return new Error();
    })
    .finally(() => {
      console.log("Got a response from the API");
    });
}
