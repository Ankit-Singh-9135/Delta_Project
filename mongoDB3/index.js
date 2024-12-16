const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const chat = require("./model/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

// Index.Route 

app.get("/chats", async (req, res) => {
    try {
        let chats = await chat.find();
        // console.log(chats);
        res.render("index.ejs", { chats });
        // res.send("working");
    } catch (err) {
        next(err);
    }
});

// New Route 

app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "page not found");
    res.render("new.ejs");
});


// let chat1 = new chat({
//     from: "shivam",
//     to: "mala",
//     message: "send me your exam sheets",
//     created_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// });

// create Route 
// app.post("/chats", (req, res) => {
//     let { from, to, msg } = req.body;
//     let newchat = new chat({
//         from: from,
//         to: to,
//         message: msg,
//         created_at: new Date()
//     });
//     newchat
//         .save()
//         .then((res) => {
//             console.log("chat was saved")
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     res.redirect("/chats");
// });
app.post("/chats", async (req, res, next) => {
    // console.log(req);
    try {
        let { from, to, msg } = req.body;
        let newchat = new chat({
            from: from,
            to: to,
            message: msg,
            created_at: new Date()
        });
        await newchat.save();
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

// New- show Router 
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {

    let { id } = req.params;
    let chats = await chat.findById(id);
    if (!chats) {
        next(new ExpressError(404, "chat not found"));
    }
    res.render("edit.ejs", { chats });

}));

// edit route 
app.get("/chats/:id/edit", asyncWrap(async (req, res) => {

    let { id } = req.params;
    let chats = await chat.findById(id);
    res.render("edit.ejs", { chats });

}));

// Update route 
app.put("/chats/:id", asyncWrap(async (req, res) => {

    let { id } = req.params;
    let { msg: newmsg } = req.body;
    console.log(newmsg);
    let updatedchats = await chat.findByIdAndUpdate(
        id,
        { message: newmsg },
        { runValidators: true, new: true }
    );
    console.log(updatedchats);
    res.redirect("/chats");


}));

// Detory& delete Route 
app.delete("/chats/:id", asyncWrap(async (req, res) => {

    let { id } = req.params;
    let deletechats = await chat.findByIdAndDelete(id);
    console.log(deletechats);
    res.redirect("/chats");

}));


app.get("/", (req, res) => {
    res.send("root is working");
});

// Error Handling Middleware 
const handleValidationErr = (err) => {
    console.log("This was a validation error.please follow rule");
    console.dir(err);
    return err;
}
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err)
});

// Error Handling Middleware 
app.use((err, req, res, next) => {
    let { status = 500, message = "some error Occured" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});