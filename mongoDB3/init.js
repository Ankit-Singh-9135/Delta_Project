const mongoose = require('mongoose');
const chat = require("./model/chat.js");



main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}
let allchats=[
 {
    from: "neha",
    to: "prity",
    message: "send me note for the exam",
    created_at: new Date(),
 },
 {
    from: "Rahul",
    to: "Aman",
    message: "send me java notes",
    created_at: new Date(),
 },
 {
    from: "shivam",
    to: "krity",
    message: "give me black pen",
    created_at: new Date(),
 },
];

chat.insertMany(allchats);
   