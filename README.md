# Testing an Imperative Loop vs Higher-Order Functions in JavaScript

Run `npm run test` in the console for a preset benchmark that includes a warmup run for the garbage collector to wake up. The test runs against the following data:

- 1,000,000 Elements of Value 100
- 10,000,000 Elements of Value 250
- 12,345,678 Elements of Value 1337
- 25,000,000 Elements of Value 500

To run against custom data, run `node index.js 5000 50` where `5000` is the size of the array and `50` is the integer value of each element.

> Note: The benchmarks are done via summing all the elements in the array.
>
> Also Note: Testing array sizes above 25 million elements sends the CPU usage above 90%, causing the VM to hang. Don't be a dick to the generous folks at CodeSandbox.
