const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
// const path = require("path");
const methodOverride= require("method-override")

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
// app.set("view engine","ejs"); 
// app.set("view", path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "ankit@123",
});


let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),

    ];
};

// Inserting New Data
// let qu = "INSERT INTO user(id,username,email,password) VALUES ?";
// let data = [];
// for (let index = 1; index <= 100; index++) {
//   data.push(getRandomUser());
// }

// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

// 
//HOME ROUTING
app.get("/", (req, res)=>{
    let q =`select count(*) from user`;
    try { 
        connection.query(q, (err, results) => {
            if (err) throw err;
            let count = results[0]["count(*)"];
            res.render("home.ejs",{count});
            
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// SHOW ROUTE 
app.get("/user",(req, res)=>{
    let q=`SELECT * FROM user`;
    try { 
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("showusers.ejs",{users});
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});
// Edit Route 
app.get("/user/:id/edit",(req, res)=>{
    let{id} = req.params;
    let q = `SELECT * FROM user WHERE id=${id} `;
    try { 
        connection.query(q, (err, results) => {
            if (err) throw err;
         let user=results[0];
            res.render("edit.ejs",{user});
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
// res.render("edit.ejs");
});

//update Route
app.patch("/user/:id",(req, res)=>{
    let{id} = req.params;
    let{password: formpasswoed, username: newUsername }= req.body;
    let q = `SELECT * FROM user WHERE id=${id} `;
    try { 
        connection.query(q, (err, results) => {
            if (err) throw err;
         let user=results[0];
         if(formpassword!= user.password){
            res.send("wrong password");
         }else{
           let q2 =`UPDATE user SET username='${newUsername} where id='${id}'`;
           connection.query(q2, (err, results)=>{
           if(err)throw err;
           res.redirect("/user");
           });
         }
            
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

app.listen("8080",()=>{
    console.log("server is listening to port 8080");
});

