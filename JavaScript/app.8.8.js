
// assigenment 9 

// Qs1.Createa new inpu tand button element onthe page using JavaScript only.Set the text of button to “Clickme”; 

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Qs2.Add following attributes to the element:
//       -Change  place holder value of input to “username”
//       -Change the id of button to “btn”

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


// Qs3.Access the btn using the query Selector and button id.Change the button background color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.Add("btnStyle");



//     Qs4.Create an h1 element on the page and set its text to “DOM Practice” underlined.Change its color to purple.
let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom practies</u>";
document.querySelector("body").append(h1);

// Qs5.Create a p tag on the page and set its text to “ApnaCollege Delta Practice”,  where Delta is bold .

let p = document.createElement("p");
p.innerHTML = "ApnaCollege<b>Delta</b>Practice";
document.querySelector("body").append(p);