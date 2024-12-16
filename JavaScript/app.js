// let a=5;
// let b=9;
// console.log("the prise is a",a+b,"rupees");

// let a=4;
// let b=5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// console.log(++a);
// console.log(--b);

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a==b);


// if statement 
// let age =23;
// if(age>=18){
//     console.log("you can voter")
// }

// pratices Q 

// let color ="red";

// if(color=== "red"){
//     console.log("stop ! light color is red")
// }

// if(color==="yellow"){
//     console.log("show down. ! light color is yellow")
// }

// if(color==="green"){
//     console.log("go. ! light color is green")
// }


// let age =14;
// if(age>=18){
//     console.log("you can voter");
// }else if(age>=18){
//     console.log("you cannot voter")
// }else if(age< 18){
//     console.log("you cannot voter2")
// }

// let age =17;
// if(age>=18){
//     console.log("you can voter")
// }else{
//     console.log("you cannot voter")
// }

// let color ="green";

// if(color=== "red"){
//     console.log("stop");
// }

// else if(color==="yellow"){
//     console.log("show down");
// }

// else if(color==="green"){
//     console.log("go");
// }else{
//     console.log("traffic light is broken");
// }

// practice Q not

// let marks =32;
// if(marks >=33){
//     console.log("pass");
//     {
//     console.log("Great : A");
//     }
// }else{
//     console.log("batter luck next time")
// }

// practice Qs 

// let str ="apple";
//  if(str[0]==="a" && str.length >3){
//     console.log("good string");
//  }else{
//     console.log("not a good string");
//  }

// let color ="red";

// switch(color){
// case"red":
//     console.log("stop");
//    break;
// case"yellow":
//     console.log("show down");
//     break;
// case"green":
//     console.log("go");
//     break
// default:
//     console.log(" light broken");
// }

// assignment 
// first 
let num =20;

if(num%10==0){
    console.log("good");
}else{
  console.log("bad");
}

// second 

let name=prompt("please enter your name");
let age=prompt(" please enter your age");

alert(`${name} is ${age} years old`);

// third 
let quarter =1;

switch(quarter) {
    case 1 : console.log("january, february, march");
    break;
    case 2: console.log("April,May,June");
    break ;
    case 3: console.log("july.august,september");
    break;
    case 4: console.log("october,november,december");
    break;
    default:console.log("Not Quarter");
}

// fourth 

let str ="apple";

if( (str[0]=='a'|| start[0]=='A') && (str.length>5)){
    console.log("golden string");
}else{
    console.log("not a golden string");
}

// fifth 

let a = 5;
let b = 18;
let c = 13

if(a>b){
    if(a>c){
        console.log(a, "is largest");
    }else{
        console.log(c, "is largest");
    }
}else{
    if(b>c){
        console.log(b, "is largest");
    }else{
        console.log(c, "is largest");
    }
}

// sisth 

let num1 = 32;
let num2 = 47852;

if ((num1%10)==(num2%10)){
    console.log("number have the same last digit is",num1%10);
}else{
    console.log("number don't have the same last digit");
}



