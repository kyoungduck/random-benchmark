const { Benchmark } = require("benchmark");
const crypto = require("crypto");

const arr = new Uint32Array(1);

new Benchmark.Suite()
  .add("Math.random", () => {
    Math.random();
  })
  .add("Crypto.getRandomValues", () => {
    crypto.webcrypto.getRandomValues(arr);
  })
  .on("cycle", (event) => {
    console.log(event.target.toString());
  })
  .run();
