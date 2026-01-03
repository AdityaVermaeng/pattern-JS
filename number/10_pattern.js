let prompt = require('prompt-sync')();
let n = Number(prompt("Enter the number:"));
let num = n;
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write(i.toString())
    }

    console.log("")
}