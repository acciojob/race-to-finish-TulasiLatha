window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`


const promises = Array.from({length: 5}, () => new Promise(resolve =>
  setTimeout(() => resolve(Math.floor(Math.random() * 5) + 1), Math.random() * 5000)
));

Promise.any(promises)
  .then(result => document.getElementById("output").innerText = result);