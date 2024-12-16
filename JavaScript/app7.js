// 1st method (for Each)
let arr = [1, 2, 3, 4, 5, 6];
let print = function (el) {
    console.log(el);
}
arr.forEach(print);
// 2st method (for Each)
arr.forEach(function (el) {
    console.log(el)
});
// 3st method (for Each)
arr.forEach((el) => {
    console.log(el)
});

let ar = [
    {
        name: "Ankit",
        marks: 95,
    },
    {
        name: "shubham",
        marks: 95.4,
    },
    {
        name: "shivam",
        marks: 93,
    },
];
ar.forEach((student) => {
    console.log(student);
});


// map 
let num = [1, 2, 3, 4, 5];
let double = num.map(function (el) {
    // return el * 2;
    return el * el;
});
console.log(double);

// or 
let student = [
    {
        name: "Ankit",
        marks: 95,
    },
    {
        name: "shubham",
        marks: 95.4,
    },
    {
        name: "shivam",
        marks: 93,
    },
];
let gpa = student.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

// filter
let nums = [2, , 3, 4, 5, 6, 1, 7, 5, 9, 8, 7,];
let ans = nums.filter((el) => {
    return el % 2 == 0;  //(evrn =>true== odd=>false)
    // return el%2!=0; //( odd=>true== even=>false )
});

// or 
let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let answer = numb.filter((el) => {
    return el < 6;
});

// Evert (AND)

let eve = [2, 4, 6, 8, 10].every((el) => (el % 2 == 0));
console.log(eve);
let ever = [2, 4, 1, 8, 10].every((el) => (el % 2 == 0));
console.log(ever);

// some  (OR)
let som = [1, 2, 3, 4].some((el) => (el % 2 == 0));
console.log(som);
let some = [1, 3,].some((el) => (el % 2 == 0));
console.log(some);

// Reduce 
// let numbe=[1,2,3,4,5].reduce((res,el)=>(res+el));
// console.log(numbe);
let numbe = [1, 2, 3, 4, 5, 5];
let finalVal = numbe.reduce((res, el) => {
    console.log(res);
    return res + el;
});
console.log(finalVal);

//Q. Finding maximum in an array 

let arrs = [1, 2, 4, 3, 7, 5, 9, 7, 11];
let mins = -1;
for (let i = 0; i > arrs.length; i++) {
    if (mins > arrs[i]) {
        mins = arrs[i];
    }
}
console.log(mins);
// second 
let array = [2, 3, 4, 5, 6, 7, 8, 1, 2];
let result = array.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(result);

// practise question 
// check if all number in our arry are multiples of 10 or not (every through)

let no = [10, 30, 20, 30, 50];
let answ = no.every((el) => el % 10 == 0);
console.log(answ)
// creat a function to find the min number in an arry(reduce  through)

let nos = [10, 30, 20, 30, 50, 5];
let min = nos.reduce((min, el) => {
    if (min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(min);

// default parameters 
function sum(a, b = 3) {
    return a + b;
}
sum(2);

// spread 
let spr = ("AnkitSingh")
console.log(...spr);

// or 
let arrrs = [1, 2, 3, 4, 5];
Math.min(...arrrs);
console.log(...arrrs);

// with arry literal 
let aars = [1, 2, 3, 4, 5];

let newAars = [...aars];
newAars;

// or 
let char = [..."hello"];
char

// with object literals 

let data = {
    email: "ankitsingh111@gmail.com",
    password: "abcd",
};
let dataCopy = { ...data, id: 123 };

// Rest 
function sum(...arg) {
    return arg.reduce((add, el) => add + el);
}

// Destructuring 
let names = ["tony", "bruce", "steve", "peter", "afsg", "xyz", "rst", "frt"];
let [winner, runnerup, ...other] = names;
console.log(winner, runnerup, other);

// or 

const students = {
    name: "Ankit",
    class: 10,
    age: 18,
    subject: ["hindi", "english", "math", "science", "socile science"],
    username: "Ankit123",
    password: 1234,
};
const { username: user, password: pass } = students;
console.log(user);