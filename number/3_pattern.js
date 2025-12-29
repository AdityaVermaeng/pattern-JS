// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number:"));
// for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j + "")
//     }
//     console.log();
// }
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number:"));
for (let i = n; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
        process.stdout.write(j + "")
    }
    console.log();
}