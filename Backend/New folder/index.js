const express = require("express");
const app = express();
const part = require("path"); 

const port = 8080;

// app.use(express.static(path.join(__dirname,"public")));
app.set("Views engine", "ejs");
// app.set("Views", path.join(__dirname, "/Views"));

app.get("/", (req, res) => {
    res.render("Home.ejs");
});

app.get("/ig/:username", (req, res) => {
    // const Followers =["shivam", "Aman","Ankit","Shubham", "Kajal", "priya","shurbhi","swati"];
    // let {username}=req.params;
    // console.log(username);
    // res.render("Instagram.ejs", {username, Followers});
    let { username } = req.params;
    const Instagram = require("./Data.json");
    const Data = Instagram[username];
    if (Data) {
        res.render("Instagram.ejs", { Data });
    } else {
        res.render("error.ejs");
    }
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let dicval = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num: dicval });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
