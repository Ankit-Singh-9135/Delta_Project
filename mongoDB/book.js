const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20

    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    discount:{
        type: Number,
        default: 0,
    },
});

const book = mongoose.model("book", bookSchema);

let book1 = new book({
    title: "Gone girl",
    price: 120,
});

book1
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
