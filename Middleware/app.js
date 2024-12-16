const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.use((req, res, next) => {
    //     // let{query}=req.query;
    //     // console.log(query);
    console.log("Hi,I am 1st middlew");
    //     // res.send("middleware finished")
    next();
});

app.use((req, res, next) => {
    console.log("Hi,I am 2nd middlew");
    next();
});

// logger - morgan 
// app.use((req, res, next)=>{
//     req.time = new Data(Date.now()).toString();
//     console.log(req.method,req.hostname, req.path, req.time);
//     next();
// });

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    // res.send("ACCESS DENIED");
    throw new ExpressError(401, "ACCESS DENIED!");
};

// app.get("/wrong",(req, res)=>{
//     abcd=abcd;
// });



app.use((req, res, next) => {
    console.log("I am only for random");
    next();
});
app.get("/api", checkToken, (req, res) => {
    res.send("data");
});




app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(500, "Access to admin is for bided");
});

app.use((err, req, res, next) => {
    // console.log("------Error-----");
    // next(err);
    // res.send(err);
    let { status = 500, message = "some Error Occurred" } = err;
    res.status(status).send(message);

});



// 404 
app.use((req, res) => {
    res.status(404).send("page not found!");
});

app.listen(8080, () => {
    console.log("server listing to port 8080");
});