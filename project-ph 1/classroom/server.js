const express = require("express");
const app = express();
const users = require("./Routes/User.js");
const posts = require("./Routes/Post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const { connect } = require("mongoose");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    // console.log(req.session.name);
    // res.send(name);
    if (name === "anonymous") {
        req.flash("error", "user not regidtered ")
    } else {
        req.flash("success", "user regidtered successfully!")
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    // // res.send(`hello, ${req.session.name}`);

    res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// });


// app.use(cookieParser("secretcode"));

// app.get("/test", (req, res) => {
//   res.send("test successful");
// });







// app.get("/getsignedcookie", (req, res) => {
//   res.cookie("Made In", "India", { signed: true });
//   res.send("signed cookies sent");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verified");
// });

// app.get("/getcookies", (req, res) => {
//   res.cookie("greet", "Hello");
//   res.cookie("Made In", "India");
//   res.send("send your some cookies");
// });

// app.get("/greet", (req, res) => {
//   let { name = "Shubham Singh" } = req.cookies;
//   res.send(` Hii ${name}`);
// });

// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   res.send("Hii I am a root");
// });

// app.use("/user", users);
// app.use("/posts", posts);

app.listen(3000, () => {
    console.log("Server is listing to 3000");
});
