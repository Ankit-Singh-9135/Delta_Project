// Onclick -------------------------------------

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked");
// }

// function sayHello() {
//     alert("Hello!");
// }

// btn.onclick = sayHello;

// No 2: Onmouseenter-----------------------------------------

//  let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("you entered a button");
//     }
//     console.dir(btn);
// }

// function sayHello() {
//     alert("Hello!");
// }

// No 3 Onclick---------------------------------------------------

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     // btn.onclick=sayHello;
//     // btn.onclick=sayName;

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);

//     btn.addEventListener("dblclick", function () {
//         console.log("you double clicked me");
//     });

// }

// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Apna collage");
// }

// activite --------------------------------------------------
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     // console.log("generate random color");
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div =document.querySelector("div");
//     div.style.backgroundColor=randomColor;

//     console.log("color updated")
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }
// -------------------------------------------------------------------
// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("parah was clicked");
// });

// let box =document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// });

// Event listeners-------------------------------------------------------------------------
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// p.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "yellow";
// });

// h1.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
// });

// h3.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// });

// or 

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");


// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// ----------------------------------------------------------------------------

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function (event) {
//     console.log(event);
//     console.log("button clicked");
// });

// or 

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("key =",event.key);
//     console.log("code",event.code);
//     console.log("key was pressed");
// });



// ------------------------------------------------------------------------ 

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("code", event.code);
//     if (event.code == "KeyU") {
//         console.log("character moves up");
//     } else if (event.code == "keyD") {
//         console.log("character moves down");
//     } else if (event.code == " keyL") {
//         console.log("character moves left");
//     } else if (event.code == "keyR") {
//         console.log("character moves Right");
//     };

// });

// ------------------------------------------------------ 

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(from);
    // alert("form.submitted");
// ------
    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);
// ---
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

    // console.log(user.value);
    // console.log(pass.value);

    // alert(`hi ${user.value},your password is set to ${pass.value}`);

    // ---
    let user = this.elements[0];
    let pass = this.elements[1];

    onsole.log(user.value);
    console.log(pass.value);

    alert(`hi ${user.value},your password is set to ${pass.value}`);
});

let user=document.querySelector("#user");

user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value =",this.value);
});

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value =",this.value);
});

// --------------------------------------------------------- 

let inp = document.querySelector("#text");
let p=document.querySelector("p");

inp.addEventListener("input", function (){
    console.log(inp.value);
    p.innerText=inp.value;
})
