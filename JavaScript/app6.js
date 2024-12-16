const student = {
    name: "ankit",
    age: 18,
    eng: 88,
    math: 85,
    sci: 73,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.sci) / 3;
        console.log(`${this.name}got avg marks=${avg}`);
    }
}
student.getAvg();

function getAvg() {
    console.log(this);
}
getAvg();

// 2 

console.log("hello");
console.log("hello");
// let a=5;
try {
    console.log(a);
} catch (err) {
    console.log("cought an error.. a is not difined");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// 3

const sum = (a, b) => {
    console.log(a + b);
};

// const cube =(n)=>{
//     return n*n*n;
// };

const pow = (a, b) => {
    return a ** b;
};

const hello = () => {
    console.log("hello world");
};
// 4
console.log("hii there!");

// setTimeout(() => {
// console.log("apna college");
// },4000)

// let Id = setInterval(() => {
//     console.log("Apna College");
// }, 2000);

// console.log(Id);

// let Id2 = setInterval(() => {
//     console.log("hello world");
// }, 3000);

// console.log(Id2);

// 5

const students = {
    name: "ankit",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },

    getMarks: () => {

        console.log(this); // parent's scope ->window
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //student
        }, 2000);
    },
};