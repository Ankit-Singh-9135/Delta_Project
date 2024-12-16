// console.log("print number");
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// console.log("odd");

// for (let i = 1; i <= 15; i = i + 2) {
//     console.log(i);
// }

// console.log("even");

// for (let i = 2; i <= 15; i = i + 2) {
//     console.log(i);
// }

// console.log("infinite");

// for (let i = 1; i <= 5; i--) {

// }


// console.log("table 5");

// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
// }

// console.log("Any table print ");

// let n = prompt("write your number");
// n=parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }


// console.log(" nested for loop");

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(j);
//     }
//     console.log("backword");
// }



// console.log("while loop");
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// console.log("break keyboard");

// let i=1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }


// console.log("loop with Arrays");

// let fruits=["mango", "apple", "banana", "litichi", "orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }


// console.log("Nested loop with nested Arrays");

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]]
// for (let i = 0; i < heroes.length; i++) {
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }


// console.log("for of loop");

// let fruits = ["mango", "apple", "banana", "litichi", "orange"];
// for (fruits of fruits) {
//     console.log(fruits);
// }

// for (char of "apna college") {
//     console.log(char);
// }

// console.log("Nested for of loop");

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]]
// for (list of heroes) {
//     for (hero of list) {
//         console.log(hero);
//     }
// }


// console.log("To Do App");

// let req = prompt("please enter your request");

// while (true) {
//     if (req == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if (req == "list") {
//         console.log("---------------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("-----------------");
//     } else if (req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");

//     } else if (req == "delete") {
//         let idx = prompt("please enter the task index");
//         todo.splice(idx, 1);
//         console.log("task deleted")
//     } else {
//         console.log("wrong request");
//     }

//     req = prompt("please enter your request");
// }

// assigement 4

// first 
// let arr =[1,2,3,4,5,6,2,3];
// let n=2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==n){
//         arr.splice(i, 1);
//     }
//     console.log(arr);
// }


// second 

// let number = 287152;
// let count = 0;

// let copy = number;
// while (copy > 0) {

//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(count);

// third 

// let number = 289252;

// let sum = 0
// let copy = number;
// while (copy > 0) {
//     digit = copy % 10;
//     sum =sum + digit;
//     copy = Math.floor(copy / 10);
// }
// console.log(sum);

// fourth 

// let n = 5;

// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}`);


// fifth 

let arr = [2, 5, 7, 3, 10, 1, 6, 1,];

let largest = 0;

for (let i = 0; i <= arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);