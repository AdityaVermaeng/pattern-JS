//inverted   floyd' trangle
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number:"));
let num = 1;
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(num + " ");
        num++;
    }
    console.log();
}

//inverted odd only floyd' trangle
let prompt2 = require('prompt-sync')();
let n2 = Number(prompt("Enter a number:"));
let num2 = 1;
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(num2 + " ");
        num2 += 2;
    }
    console.log();
}


//inverted even only floyd' trangle
let prompt3 = require('prompt-sync')();
let n3 = Number(prompt("Enter a number:"));
let num3 = 2;
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(num3 + " ");
        num3 += 2;
    }
    console.log();
}