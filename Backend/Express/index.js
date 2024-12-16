const express = require("express");
const app = express()

// console.dir(app);

let port =8000

app.listen(port, () => {
    console.log(`app listing on port ${port}`);
});

app.get("/",(req, res)=>{
    res.send("you contacted root path");
});

app.get("/apple",(req, res)=>{
    res.send("you contacted apple path");
});

app.get("/orange",(req, res)=>{
    res.send("you contacted orange path");
});

app.get("*",(req, res)=>{
    res.send("this path does not exit");
});

// app.use((req, res)=>{
//     console.log("request receved");
//     let code=("<h1>Fruit</h1> <ul><li>apple</li><li>oringr</li> </ul>")
//     res.send(code)
// });

app.get("/:Username/id",(req, res)=>{
    let{username,id} = req.params;
    res.send(`welcome to the page of @${username}`);
});

