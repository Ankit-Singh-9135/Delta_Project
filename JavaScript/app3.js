// first 
//  let arr=[7,9,0,-2];
//  let n=3;
//  let ans= arr.slice(0,n);
//  console.log(ans);


// // second 
//  let arr=[7,9,0,-2];
//  let n=3;
//  let ans= arr.slice( arr.length-n);
//  console.log(ans);


// third 
//  let str = prompt ("ankit aingh");
//  if(str.length ==0){
//     console.log("yes")
//  }else{
//     console.log("No");
//  }


// fourth 
// let str = "Apna collage";
// let idx = 3;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("character is lowercase");
// }else{
//     console.log("character is not lowercase");
// }


// fifth 
let str = prompt("please enter a string");
console.log(`oriangle string =${str}`);
console.log(`string without spaces = ${str.trim()}`);


// sisth 
let arr =["hello", 'a', 23,64,99,-6];
let item =64;

if(arr.indexOf(item) !=-1){
    console.log("element exists in array");
}else{
    console.log("element doesn't exists in array");
}