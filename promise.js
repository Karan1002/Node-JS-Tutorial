let a = 10,
  b = 0;

console.log("Karan");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Karan");
    b = 30;
    resolve(b);
  }, 3000);
});

promise.then((data) => {
  console.log(a + data);
});
console.log(a + b);
