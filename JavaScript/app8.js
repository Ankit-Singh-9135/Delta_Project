console.log(window);
console.log(document);

// =>console.log("getElementById");
let id = document.getElementById("mainImg")
console.dir(id);

let ids = document.getElementById("abc,gfd")
console.dir(ids);

// =>console.log("getElementByClassName");

let imgClass = document.getElementsByClassName("oldImg");
console.dir(imgClass);
for (let i = 0; i < imgClass.length; i++) {
    console.dir(imgClass[i].src);
}

// =>console.log("getElementByTagName");

let Tag = document.getElementsByTagName("p");
console.dir(Tag);

let Tags = document.getElementsByTagName("abc");
console.dir(Tags);

//=> console.log("Query selectors");

let para = document.querySelector('p');
console.dir(para);

let myId = document.querySelector("#description");
console.dir(myId);

let myclass = document.querySelector('.boxLink');
console.dir(myclass);

let mypara = document.querySelector("a");
console.dir(mypara);

// => using properties & methods 

// console.log(innerText);
console.log(para.innerText);

// console.log(textContent);
console.log(para.textContent);

// console.log(innerHTML);
console.log(para.innerHTML);

// => Mainpulating attributes 

let img = document.querySelector("img");
console.dir(img);
console.log(img);
console.log(img.getAttribute("id"));
console.log(img.setAttribute('id', 'spider man'));

// =>Mainpulating style 

console.dir(img.style);
let heading = document.querySelector('h1');
console.dir(heading);
console.dir(heading.style);
console.dir(heading.style.color = "blue");
console.dir(heading.style.backgroundColor = "yellow");
let links = document.querySelectorAll('.box a');
console.dir(links);
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "pink"

// }

for (link of links) {
    link.style.color = "green";
}

// => using classlist 

heading.classList.add("inner");
heading.classList.remove("inner");
console.log(heading.classList);
console.log(heading.classList.contains("inner"));
console.log(heading.classList);
console.log(heading.classList.contains("heading"));
console.log(heading.classList);

console.log(heading.classList.toggle("inner"));
console.log(heading.classList);
console.log(heading.classList.toggle("inner"));
console.log(heading.classList);

// => Navigation 
let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);
// ;let box = document.querySelector('.box');
// console.log(box.children);
// console.log(box.childElementCount)

// =>Adding Element 
document.createElement('p');
let newP = document.createElement('p');
console.dir(newP);

newP.innerText = "Hi, I am a new p";
console.dir(newP);

let body = document.querySelector('body');
body.appendChild(newP);

let box = document.querySelector('.box');
box.appendChild(newP);

let btn = document.createElement('button');
console.dir('btn');
console.dir(btn);

btn.innerText = "click me!";
box.appendChild(btn);

para.insertAdjacentElement('beforebegin', btn);
para.insertAdjacentElement('afterbegin', btn);
para.insertAdjacentElement('beforeend', btn);

// practice Qs 
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "Me Too!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);
