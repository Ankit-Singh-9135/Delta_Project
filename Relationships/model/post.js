const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String
});

const postSchema = new Schema({
    content: String,
    like: Number,
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    ],
});
const user = mongoose.model("user", userSchema);
const post = mongoose.model("post", postSchema);

// const addData = async () => {
//     let user = await User.findOne({ username: "AnkitSingh" });

//     let post2 = new post({
//         content: "Hii Hii Hii",
//         likes: 88,
//     });

//     post2.user = user;
//     await post2.save();
// };

// addData();

const getData = async () => {
    let result = await post.findOne({}).populate("user", "username");
    console.log(result);
    };
    
    getData();

// const del = async()=>{
//     await post.findByIdAndDelete("6587b123e360859a055cee04");
//     await User.findByIdAndDelete("6587ae2a2c0c884396c0c196");

// }
// del();