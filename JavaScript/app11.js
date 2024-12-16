function hello() {
    console.log("inside hello fnx");
    console.log("hello");
}

function demo() {
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("demo , bye!");

// ------------------------------------------------ 

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();  //source me dekhe

// ---------------------------------------- 

let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);

// synchrous nature 

setTimeout(() => {
    console.log("apna college");
}, 2000);

setTimeout(() => {
    console.log("hello world");
}, 2000);

console.log("hello....");

// -------------------------------------------- 
h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color="red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color="green";
// }, 2000);

// setTimeout(() => {
//     h1.style.color="yellow";
// }, 3000);

// or 
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red", 1000, () => {
    changeColor("pink", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("orange", 1000, () => {
                    changeColor("purple", 1000, () => {
                        changeColor("blue", 1000, () => {

                        });
                    });
                });
            });
        });
    });
});

// ----------------------------------------- 

// function savetoDb(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "apna college", () => {
//         console.log("success : your data was saved");
//         savetoDb(
//             "hello world", () => {
//                 console.log("success 2: data2 saved");
//                 savetoDb(
//                     "Ankit",
//                     () => {
//                         console.log("success 3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure 3: weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure 2: weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure : weak connection: data not saved");
//     }
// );
// --------------------------------------- 
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//         if (internetspeed > 4) {
//             success("success : data was saved");
//         } else {
//             failure("failure : weak connection");
//         }
//     });
// }

// savetoDb("apna college");

// ------------------------------------------------------------- 

savetoDb("apna college")
    .than(() => {
        console.log("data1 saved");
        return savetoDb("helloworld")
    })

    .than(() => {
        console.log("data2 saved");
        return savetoDb("Ankit")
    })

    .than(() => {
        console.log("data3 saved");
       
    })
    .catch(() => {
        console.log("{promise was rejected");
    
    });