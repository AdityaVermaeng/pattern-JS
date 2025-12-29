let prompt = require('prompt-sync')();
let n = Number(prompt("Enter your number:"));
let num = 2
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(num + " ");
        num += 2;
    }
    console.log();
}