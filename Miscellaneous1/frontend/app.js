// const student1 ={
//     name: "Ankit",
//     age: 20,
//     mark: 95,
//     getMarks: function (){
//         return this.marks;
//     },
// };

// const student2 ={
//     name: "shubham",
//     age: 25,
//     mark: 97,
//     getMarks: function (){
//         return this.marks;
//     },
// };

// const student3 ={
//     name: "shivam",
//     age: 32,
//     mark: 99,
//     getMarks: function (){
//         return this.marks;
//     },
// };
// ---------------------------------------------------
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// arr2.sayHello = () => {
//     console.log("hello!, i am arr");
// };
// --------------------------------------------------------
// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`HI, my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// ----------------------------------------------------------------------
// constructors - doesnot return anything & start with capital
// function person(name, age){
//        this.name= name;
//        this.age= age;
//        console.log(this);
//     }
//     person.prototype.talk=function(){
//         console.log(`hi, my name is ${this.name}`);
//     };



// class person{
// constructor(name, age){
//     this.name= name;
//     this.age= age;
//  }
//  talk(){
//      console.log(`hi, my name is ${this.name}`);
//  };
// }


//     let p1 = new person("adam",25);
//     let p2 = new person("eve",25);


// -------------------------------------------------------------

// class person {
//     constructor(name, age) {
//         console.log("person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`hi, I am${this.name}`);
//     };
// }
// class student extends person {
//     constructor(name, age, marks) {
//         console.log("student class constructor");
//         super(name, age);  //parent class constructor is being called
//         this.marks = marks;
//     }

// }

// class Teacher extends person {
//     constructor(name, age, subject) {
//         super(name, age); //parent class constructor is being called
//         this.subject = subject;
//     }

// }
// ----------------------------------------

class mammal{   //base class /parent
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}


class dog extends mammal{  //child
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wooff....");
    }
}
class cat extends mammal{    //child
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow....");
    }
}