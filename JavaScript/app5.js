function hello() {
    console.log("hello");
}
hello();

// function printName() {
//     console.log("ankit singh");
//     console.log("nation business college");
// }
// printName();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("isAdult");
    } else {
        console.log("not isAdult");
    }
}
isAdult();

// create a function that print a poem 
function poem() {
    console.log("hathi dada bahut bade the");
    console.log("sodh hilakar kaha chale the");
    console.log("aao betho kursi par");
    console.log("kursi bole char char");
    console.log("hathi dada gire dharma");
    console.log("muh se nikala haye ram");
}
poem();

// create a function to roll a dice & always display the valu of the dice (1 to 6). 

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();


function printName(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
printName("Ankit", 18);


function sum(a, b) {
    console.log(a + b);
}
sum(1, 2);
sum(2, 8);
sum(5, 9);

// create a function that gives us the average of 3 number 
function calcuavg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
calcuavg(3, 4, 5);

// create a function that print the multiplication table of a number . 
function printTable(n) {
    for (let i = 0; i <= n * 10; i += n) {
        console.log(i);
    }

}
printTable(10);

function sum(a, b) {
    return a + b;
}
// let s = sum(3, 4);
// console.log(s);

console.log(sum(sum(1, 2), 3));

function sum(a, b) {
    console.log("hello");
    console.log("hello");
    return a + b;
    console.log("hello2");
    console.log("hello2");
}
console.log(sum(1, 2));


// create a function that return the sum of number from 1 to n  XXXXXXXXXXXXgalt haiXX
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(5);
// getSum(5);


// create a function that return the concatenation of all string in an array 

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//     let result = "";

//     for (let i = 0; i <= str.length; i++) {
//         result += str[i];

//     }
//     console.log(result);
//     return result;
// }
// concat(str);


let add = 54;  //Global scope

function caladd(a, b) {
    let sum = a + b;  //Function scope
    console.log(sum)
}
caladd(1, 2);
// console.log(sum);


for (let i = 1; i <= 5; i++) {
    console.log(i); //block scope
}


function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {  //lexical scope
        console.log(x);
    }

    innerFunc();
}
outerFunc();


function outerFunc() {
    function innerFunc() {
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 6;

    innerFunc();
}

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {  //function scope
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a);
// innerFunc();
// }


// what will be the ougtput 

let greet = "hello"; //global scope

function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }

    innerGreet();

}
console.log(greet);
changeGreet();


function multiplication(func, count) {   //higher order function
    for (let i = 1; i <= count; i++) {
        func();
    }
}

let greets = function () {
    console.log("hello");
}

// multiplication(greet, 2);
multiplication(function () { console.log("namaste") }, 1000);



let odd = function (n) {
    console.log(!(n % 2 == 0));
}

let even = function (n) {
    console.log(n % 2 == 0);
}
odd(4);
even(3);


function oddEvenTest(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    } else if (request == "Even") {
        let Even = function (n) {
            console.log(n % 2 == 0);
        }
        return Even;

    } else {
        console.log("wrong request");
    }
}

let request = "odd";
// let request="Even";


const calculate = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }

};
console.log(calculate.add(6, 3));
console.log(calculate.sub(6, 3));
console.log(calculate.mul(6, 3));

const calculates = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
};
console.log(calculates.add(6, 3));
console.log(calculates.sub(6, 3));
console.log(calculates.mul(6, 3));

// assignment 6

console.log("first");

let arr = [3, 4, 6, 7, 12, 45, 35, 65];

let num = 6;
// element larger than a number num 
function getElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElement(arr, num);


console.log("second");
let str = "sfedtyhgiunbvcerwcfhdsefotiuer'iwehfiuwarytwcbvnd;hkr[pgtojwrihwlefkeprgueghbd";
// function to get string with all unique element 
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    console.log(ans);
    return ans;
}
getUnique(str);

console.log("third");
let country = ["Australia", "Germany", "United States of America"];

function longestName(Country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    console.log(country[2]);

    return country[ansIdx];
}
longestName(country);



console.log("fourth");

let stre = "ankitsingh";

function countVowels(stre) {
    let count = 0;
    for (let i = 0; i < stre.length; i++) {
        if (
            stre.charAt(i) == "a" ||
            stre.charAt(i) == "e" ||
            stre.charAt(i) == "i" ||
            stre.charAt(i) == "o" ||
            stre.charAt(i) == "u"
        ) {
            count++;
        }
    }
    console.log(count);
    return count;
}
countVowels(stre);


console.log("fifth");
// let start = 100;
// let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    let random = Math.floor(Math.random() * diff) + start;
    console.log(random);
    return random;

}
generateRandom(1, 20);