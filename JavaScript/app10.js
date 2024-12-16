// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let li=document.querySelector("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for (li of lis){
// li.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
// });
// }

// ---------------------------------------------------

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//     // console.log("inp.value");
//     let item = document.createElement("li");
//     item.innerText = inp.value;


//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";

// });

// ul.addEventListener("click",function(event){
//     // // console.log(event.target);
//     // console.dir(event.target.nodeName);
//     // // console.log("button clicked");

//     if(event.target.nodeName=="BUTTON"){
//         let listItem=event.target.parentElement;
//         // console.log(listItem);
//         listItem.remove();
//         console.log("delete");
//     }
// });



// // let delBtn = document.querySelectorAll(".delete");
// // for (delBtn of delBtns) {
// //     delBtn.addEventListener("click", function () {
// //         let par =this.parentElement;
// //         console.log(par);
// //         par.remove();
// //     });
// // }

// ------------------------------------------------- 
let gameseq = [];
let userseq = [];

let btn = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randIdx); 
    // console.log(randcolor); 
    // console.log(randBtn); 
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randBtn);
}

function chechAns() {
    // console.log("curr level :", level);
    let idx = level - 1;

    if (userseq[idx] === gameseq[idx]) {
        // console.log("same value");
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b><br>Press any key to start.`;
       document.querySelector("body").style.color="red";
       setTimeout(function (){
        document.querySelector("body").style.color="white";
       },150);
        reset();
    }
}

function btnpress() {
    console.log(this);
    let btn = this;
    userflash(btn);


    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
