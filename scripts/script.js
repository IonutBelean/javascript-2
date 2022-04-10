// Exercitiul 1

let number1 = 5;
let number2 = -10;
let number3 = 2;
let sum = (number1 + number2 + number3)

if (sum > 0) {
    console.log("Rezultatul este pozitiv");
} else if (sum === 0) {
    console.log("Rezultatul este 0")
} else {
    console.log("Rezultatul este negativ");
}

// Exercitiul 2

let iterateFrom = 25;
let iterateTill = 38;

for (let i = iterateFrom; i <= iterateTill; i++) {
   if (i % 2 === 0) {
        console.log(i + "-par");
   } else {
       console.log(i + "-impar");
   }
}