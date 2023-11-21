# js-promise-image-size-filter

## Promise

In JavaScript, a **`Promise`** is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are a way to handle asynchronous code more elegantly and avoid the "callback hell" that can arise when dealing with multiple asynchronous operations.

A **`Promise`** has three states:

1. **Pending**: The initial state; the promise is neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully, and the promise has a resulting value.
3. **Rejected**: The operation failed, and the promise has a reason for the failure.

The basic syntax for creating a promise looks like this:

```js
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  // If successful, call resolve(result)
  // If an error occurs, call reject(error)
});
```

Here's a simple example:

```js
const fetchData = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    const data = { message: 'Data fetched!' };
    resolve(data); // The promise is fulfilled with the data
  }, 2000);
});

// Using the promise
fetchData
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

The **`then`** method is used to handle the fulfilled state, and the catch method is used to handle the rejected state. Promises provide a more structured and readable way to work with asynchronous code compared to traditional callback patterns.

![2023-11-21 15-10-06](https://github.com/codewithelmor/js-promise-async-await-image-size-filter/assets/44918452/c53fa191-6e8a-4471-9397-2b001541d243)
