// Exercise 1

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

// Exercise 2

let iterateFrom = 25;
let iterateTill = 38;

for (let i = iterateFrom; i <= iterateTill; i++) {
   if (i % 2 === 0) {
        console.log(i + "-par");
   } else {
       console.log(i + "-impar");
   }
}

// Exercise 3

let logArray = ["unu", "doi", "trei", "patru", "cinci"];

let arrayLength = logArray.length;

for (let i = 0; i < arrayLength; i++) {
    console.log(logArray[i]);
}

// Exercise 4

let sumArray = [153,235,325,945,25];

let sumAll = 0;

for (let i = 0; i < sumArray.length; i++) {
    sumAll += sumArray[i];
}

console.log(sumAll);

// Exercise 5

let devSalaryIncreaseProcents = 20;
let qaSalaryIncreaseProcents = 15;

let objectToIterate = {
  name: "John Doe",
  position: "Manager",
  workers: [
    {
      name: "Lisa",
      position:  "DEV",
      salary: 500
    },    {
      name: "Bryan",
      position:  "QA",
      salary: 350
    },
        {
      name: "Mark",
      position:  "DEV",
      salary: 640
    },
    {
      name: "Rebecca",
      postion: "QA",
      salary: 700
    }
  ]
}
 
