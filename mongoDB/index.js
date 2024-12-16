const mongoose = require('mongoose');
 
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.updateOne({name:"rahul"},{age:49})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// User.findOne({age: {$gt:30}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "rahul", email: "rahul@gmail.com", age: 20},
//     {name: "kamal", email: "kamal@gmail.com", age: 30},
// ]).then((res)=>{
//     console.log(res);
// });

// const user2 = new User({
//     name: "Aman",
//     email: "aman@yahoo.in",
//     age: 48,
// });
// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });