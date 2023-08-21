console.log("Start");
setTimeout(() => console.log("Timeout"));
Promise.resolve().then(() => console.log("Promise"));
console.log("End");